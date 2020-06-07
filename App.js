import React from 'react';
import {Provider} from 'mobx-react';
import {Text} from 'react-native';
import {stores} from './src/stores';
import MessageScreen from './src/screens/MessageScreen';
import ChatScreen from './src/screens/ChatScreen';
import {Navigator} from './src/navigator';

const App = () => {
  React.useEffect(() => {
    // override fonts with Roboto
    let oldRender = Text.render;
    Text.render = function(...args) {
      let origin = oldRender.call(this, ...args);
      return React.cloneElement(origin, {
        style: [{fontFamily: 'Roboto'}, origin.props.style],
      });
    };
  }, []);

  return (
    <Provider {...stores}>
      <Navigator />
    </Provider>
  );
};

export default App;
