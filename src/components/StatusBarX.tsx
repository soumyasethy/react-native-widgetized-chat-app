import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../utils/colors';

const StatusBarX = () => {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={colors.WHITE}
      translucent={true}
    />
  );
};

export default StatusBarX;
