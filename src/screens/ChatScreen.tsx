import React from 'react';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {widgetsPage} from '../widgets/WidgetsPage';
import {AppContainer} from '../components/AppContainer';

const ChatScreen = (props: any) => {
  //Loading data here to store
  React.useEffect(() => {
    props.chatStore.fetchData();
  }, []);
  return <AppContainer>{widgetsPage(props.chatStore.getChat)}</AppContainer>;
};

export default inject(storeType.chatStore)(observer(ChatScreen));
