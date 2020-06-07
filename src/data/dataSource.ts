import {widgetMap} from '../widgets/WidgetMapper';
import {spacing} from '../utils/spacing';
import {colors} from '../utils/colors';

export const messagesData = [
  {
    widgetType: widgetMap.STATUS_BAR_WIDGET,
    data: {},
  },
  {
    widgetType: widgetMap.HEADER_MESSAGES_WIDGET,
    data: {debounce: 500},
  },
  {
    widgetType: widgetMap.TAB_BAR_WIDGET,
    data: [{text: 'Messages'}, {text: 'Calls'}, {text: 'Groups'}],
  },
  {
    widgetType: widgetMap.FAVORITE_LIST_WIDGET,
    data: [
      {image: require('../assets/avatar/elsie.png'), text: 'Elsie'},
      {image: require('../assets/avatar/mary.png'), text: 'Mary'},
      {image: require('../assets/avatar/vic.png'), text: 'Vic'},
      {image: require('../assets/avatar/john.png'), text: 'John'},
    ],
  },
  {
    widgetType: widgetMap.SEPARATOR_WIDGET,
    data: {
      marginLeft: spacing.medium,
      marginTop: spacing.xxlarge,
      marginBottom: spacing.xxlarge,
    },
  },

  {
    widgetType: widgetMap.MESSAGES_LIST_WIDGET,
    data: [
      {
        image: require('../assets/avatar/ajala_ojo.png'),
        name: 'Ajala Oso',
        message: 'stepping out tonight 🥳🥳',
        time: 'just now',
        unread_count: '12',
      },
      {
        image: require('../assets/avatar/monisola.png'),
        name: 'Monisola',
        message: 'sorry bro 🤷‍♂️🤷‍♂️',
        time: '15:08',
        unread_count: '4',
      },
      {
        image: require('../assets/avatar/ssshile.png'),
        name: 'ssshile',
        message: 'thats how we roll bro...',
        time: '13:09',
        unread_count: '0',
      },
      {
        image: require('../assets/avatar/anna.png'),
        name: 'Anna',
        message: 'stepping out tonight',
        time: '8:21',
        unread_count: '1',
      },
      {
        image: require('../assets/avatar/idara_bella.png'),
        name: 'Idara Bella',
        message: 'must you always be troublesome?',
        time: '8:00',
        unread_count: '0',
      },
    ],
  },
];
export const chatData = [
  {
    widgetType: widgetMap.STATUS_BAR_WIDGET,
    data: [],
  },
  {
    widgetType: widgetMap.HEADER_CHAT_WIDGET,
    data: {
      primaryText: 'Ajala Olo',
      secondaryText: 'Active now',
      indicatorColor: colors.GREEN,
    },
  },
  {
    widgetType: widgetMap.CHAT_LIST_WIDGET,
    data: [
      {
        widgetType: 'text',
        text: 'heeey man! I just got in from kano, cheers to the win 🥳',
        timeStamp: '00:12',
        sentByMe: false,
      },
      {
        widgetType: 'text',
        text: "so..about that ish we talked about, I'll discuss later",
        timeStamp: '01:09',
        sentByMe: true,
      },
      {
        widgetType: 'text',
        text: 'okay man, waiting...',
        timeStamp: '01:10',
        sentByMe: false,
      },
      {
        widgetType: 'text',
        text: 'when are you returning to Rio?',
        timeStamp: '01:15',
        sentByMe: true,
      },
      {
        widgetType: 'text',
        text: 'you know we need to chill 😉😜',
        timeStamp: '01:15',
        sentByMe: true,
      },
      {
        widgetType: 'voice',
        image: require('../assets/voice_chat.png'),
        timeStamp: '02:00',
        sentByMe: false,
      },
    ],
  },
  {
    widgetType: widgetMap.CHAT_INPUT_WIDGET,
    data: {placeholder: 'Type new message'},
  },
];
