import React from 'react';
import {inject, observer} from 'mobx-react';
import {storeType} from '../stores/StoreType';
import {widgetsPage} from '../widgets/WidgetsPage';

const MessageScreen = (props: any) => {
  //Loading data here to store
  React.useEffect(() => {
    props.messagesStore.fetchData();
  }, []);
  return widgetsPage(props.messagesStore.getMessages);
};

export default inject(storeType.messagesStore)(observer(MessageScreen));
