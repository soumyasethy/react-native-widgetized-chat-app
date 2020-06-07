import React from 'react';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {widgetsPage} from '../widgets/WidgetsPage';
import {AppContainer} from '../components/AppContainer';

const MessageScreen = (props: any) => {
  //Loading data here to store
  React.useEffect(() => {
    props.messagesStore.fetchData();
  }, []);
  return (
    <AppContainer>{widgetsPage(props.messagesStore.getMessages)}</AppContainer>
  );
};

export default inject(storeType.messagesStore)(observer(MessageScreen));
