import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {colors} from '../utils/colors';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {Separator} from './Separator';
import {_goToPage} from '../navigator/_goToPage';
import {pageType} from '../navigator/pageType';
import {fonts} from '../utils/fonts';

interface dataInterface {
  image: string;
  name: string;
  message: string;
  time: string;
  unread_count: string;
}
const Messages = (props: any) => {
  let data = props.data.filter((message: any) => {
    return JSON.stringify(message)
      .toLocaleLowerCase()
      .includes(props.messagesStore.searchText.toLocaleLowerCase());
  });
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
const renderItem = (item: dataInterface) => {
  let hasUnread = item.unread_count !== '0';
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => _goToPage(pageType.ChatScreen)}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={{flexDirection: 'column', marginLeft: 16, flex: 1}}>
        <View style={styles.nameTime}>
          <Text style={styles.name}>{item.name}</Text>
          <Text
            style={[
              styles.time,
              {color: hasUnread ? colors.BLACK1 : colors.BLACK2},
            ]}>
            {item.time}
          </Text>
        </View>
        <View style={styles.messageUnreadWrapper}>
          <Text style={styles.message}>{item.message}</Text>
          {hasUnread && (
            <View style={styles.unReadCountWrapper}>
              <Text style={styles.unreadText}>{item.unread_count}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default inject(storeType.messagesStore)(observer(Messages));

const styles = StyleSheet.create({
  container: {flex: 1},
  message: {
    fontWeight: '300',
    fontSize: fonts.size.xsmall,
    color: colors.BLACK2,
  },
  imageWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  image: {height: 50, width: 50, resizeMode: 'contain'},
  unReadCountWrapper: {
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.BLUE,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 1,
    paddingBottom: 1,
  },
  unreadText: {color: colors.WHITE, fontSize: fonts.size.xsmall},
  name: {fontWeight: fonts.weight.medium, fontSize: fonts.size.medium},
  time: {
    fontWeight: fonts.weight.medium,
    fontSize: fonts.size.default,
  },
  nameTime: {flexDirection: 'row', justifyContent: 'space-between'},
  messageUnreadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});
