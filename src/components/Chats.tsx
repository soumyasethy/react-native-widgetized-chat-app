import React, {useEffect, useRef} from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import {colors} from '../utils/colors';
import {spacing} from '../utils/spacing';
import {keyboardHook} from './KeyboardHook';

const Chats = ({data}: any) => {
  const flatListRef = useRef();
  const [isKeyboardOpened] = keyboardHook();
  useEffect(() => {
    setTimeout(() => flatListRef.current.scrollToEnd({animated: true}), 100);
  }, [isKeyboardOpened]);

  return (
    <View style={{padding: spacing.default, flex: 1, marginTop: spacing.large}}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={({item, index}) =>
          renderItem(
            item,
            index,
            index < data.length - 1 &&
              item.timeStamp === data[index + 1].timeStamp,
          )
        }
        keyExtractor={(item, index) => index.toString()}
        // initialScrollIndex={data.length - 1}
      />
    </View>
  );
};
const renderItem = (item: any, index: number, hasSameTime = false) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: !item.sentByMe ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        marginBottom: spacing.default,
      }}>
      {!item.sentByMe && (
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assets/avatar/ajala_ojo.png')}
            style={styles.avatar}
          />
        </View>
      )}
      <View style={styles.chatWrapper}>
        <View
          style={
            !item.sentByMe
              ? hasSameTime
                ? styles.bottomLeft
                : styles.topLeft
              : hasSameTime
              ? styles.bottomRight
              : styles.topRight
          }>
          {item.widgetType === 'text' ? (
            <Text
              style={{color: !item.sentByMe ? colors.BLACK1 : colors.WHITE}}>
              {item.text}
            </Text>
          ) : (
            <Image source={item.image} style={{width: '100%', height: 20}} />
          )}
        </View>
        {!hasSameTime && (
          <View
            style={{
              marginTop: spacing.default,
              marginBottom: spacing.large,
            }}>
            <Text
              style={{
                alignSelf: !item.sentByMe ? 'flex-start' : 'flex-end',
                color: colors.BLACK2,
              }}>
              {item.timeStamp}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  topLeft: {
    padding: spacing.large,
    backgroundColor: colors.WHITE_CREAM,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  bottomLeft: {
    padding: spacing.large,
    backgroundColor: colors.WHITE_CREAM,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
  },
  topRight: {
    padding: spacing.large,
    backgroundColor: colors.BLUE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  bottomRight: {
    padding: spacing.large,
    backgroundColor: colors.BLUE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
  },
  avatarWrapper: {
    height: 30,
    width: 30,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {height: 30, width: 30, resizeMode: 'contain'},
  chatWrapper: {
    flexDirection: 'column',
    marginLeft: spacing.default,
    width: '70%',
  },
});
