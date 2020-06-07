import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {widgetManager} from './WidgetManager';

export const widgetsPage = (data: any[]) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return widgetManager(index, item);
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
