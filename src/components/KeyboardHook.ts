import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const keyboardHook = () => {
  const [isKeyboardOpened, toggleKeyboard] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);
  const _keyboardDidShow = () => {
    toggleKeyboard(true);
  };

  const _keyboardDidHide = () => {
    toggleKeyboard(false);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return [isKeyboardOpened, dismissKeyboard];
};
