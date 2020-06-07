import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import _ from 'lodash';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {keyboardHook} from './KeyboardHook';
import {spacing} from '../utils/spacing';
const screenWidth = Math.round(Dimensions.get('window').width);

const AppBarMessages = (props: any) => {
  const [isKeyboardOpened, dismissKeyboard] = keyboardHook();

  const [x, setX] = useState(new Animated.Value(screenWidth));
  const searchTextInputRef = useRef();

  const onChangeText = (text: string) => {
    props.messagesStore.setSearchText(text);
  };

  useEffect(() => {
    if (isKeyboardOpened) slideIn();
    //else slideOut();
  }, [isKeyboardOpened]);

  const slideIn = () => {
    Animated.spring(x, {
      useNativeDriver: true,
      toValue: 0,
    }).start();
  };
  const slideOut = () => {
    Animated.spring(x, {
      useNativeDriver: true,
      toValue: screenWidth,
    }).start();
  };
  const handleBackPress = () => {
    dismissKeyboard();
    slideOut();
    onChangeText('');
    searchTextInputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={{padding: spacing.default}}>
          <Image
            source={require('../assets/back.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <Animated.View
          style={{
            transform: [{translateX: x}],
          }}>
          <TextInput
            ref={searchTextInputRef}
            style={{flex: 1}}
            placeholder="Type to search..."
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={_.debounce(onChangeText, props.data.debounce)}
          />
        </Animated.View>
      </View>
      {!isKeyboardOpened && (
        <TouchableOpacity
          onPress={() => {
            searchTextInputRef.current.focus();
          }}
          style={{padding: spacing.default}}>
          <Image
            source={require('../assets/search.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default inject(storeType.messagesStore)(observer(AppBarMessages));

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container2: {flexDirection: 'row', alignItems: 'center', flex: 1},
  imageStyle: {width: 20, height: 20, resizeMode: 'contain'},
});
