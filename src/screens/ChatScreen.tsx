import React from 'react';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {widgetsPage} from '../widgets/WidgetsPage';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../utils/colors';

const ChatScreen = (props: any) => {
  //Loading data here to store
  React.useEffect(() => {
    props.chatStore.fetchData();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.WHITE}}>
          <View style={{flex: 1}}>{widgetsPage(props.chatStore.getChat)}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default inject(storeType.chatStore)(observer(ChatScreen));
