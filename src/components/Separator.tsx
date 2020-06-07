import {View} from 'react-native';
import {colors} from '../utils/colors';
import React from 'react';
import {spacing} from '../utils/spacing';

export const Separator = (props: any) => {
  return (
    <View
      style={{
        height: props?.data?.height||0.8,
        backgroundColor: colors.BLACK3,
        marginTop: props?.data?.marginTop||spacing.xlarge,
        marginBottom: props?.data?.marginBottom||spacing.xlarge,
        marginLeft: props?.data?.marginLeft || spacing.xxxlarge + spacing.large,
        marginRight: props?.data?.marginRight ||spacing.default,
      }}
    />
  );
};
