import React from 'react';
import {Provider} from 'mobx-react';
import {Platform, Text} from 'react-native';
import {stores} from './src/stores';
import {Navigator} from './src/navigator';
import SplashScreen from 'react-native-splash-screen';

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
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <Provider {...stores}>
      <Navigator />
    </Provider>
  );
};

export default App;
