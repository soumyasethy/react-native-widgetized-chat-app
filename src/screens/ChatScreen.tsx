import React from 'react';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {widgetsPage} from '../widgets/WidgetsPage';

const ChatScreen = (props: any) => {
  //Loading data here to store
  React.useEffect(() => {
    props.chatStore.fetchData();
  }, []);
  return widgetsPage(props.chatStore.getChat);
};

export default inject(storeType.chatStore)(observer(ChatScreen));
