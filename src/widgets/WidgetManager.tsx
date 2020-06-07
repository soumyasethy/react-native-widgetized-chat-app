import React from 'react';
import {widgetMap} from './WidgetMapper';
import AppBarMessages from '../components/AppBarMessages';
import StatusBarX from '../components/StatusBarX';
import TabBar from '../components/TabBar';
import Favorite from '../components/Favorite';
import Messages from '../components/Messages';
import AppBarChat from '../components/AppBarChat';
import Chats from '../components/Chats';
import ChatInput from '../components/ChatInput';
import {Separator} from '../components/Separator';

interface dataInterface {
  widgetType: string;
  data: object;
}

export const widgetManager = (index: number, data: dataInterface) => {
  switch (data.widgetType) {
    case widgetMap.STATUS_BAR_WIDGET: {
      return <StatusBarX key={index} />;
    }
    case widgetMap.HEADER_MESSAGES_WIDGET: {
      return <AppBarMessages key={index} />;
    }
    case widgetMap.HEADER_CHAT_WIDGET: {
      return <AppBarChat key={index} data={data.data} />;
    }
    case widgetMap.TAB_BAR_WIDGET: {
      return <TabBar key={index} data={data.data} />;
    }
    case widgetMap.FAVORITE_LIST_WIDGET: {
      return <Favorite key={index} data={data.data} />;
    }
    case widgetMap.MESSAGES_LIST_WIDGET: {
      return <Messages key={index} data={data.data} />;
    }
    case widgetMap.CHAT_LIST_WIDGET: {
      return <Chats key={index} data={data.data} />;
    }
    case widgetMap.CHAT_INPUT_WIDGET: {
      return <ChatInput key={index} data={data.data} />;
    }
    case widgetMap.SEPARATOR_WIDGET: {
      return <Separator key={index} data={data.data} />;
    }
    default: {
      return <> </>;
    }
  }
};
