import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {spacing} from '../utils/spacing';

const ChatInput = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          multiline
          placeholder={props?.data?.placeholder}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
      </View>
      <View style={styles.iconWrapper}>
        <Image source={require('../assets/send.png')} style={styles.icon} />
      </View>
    </View>
  );
};

export default ChatInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_GRAY,
    paddingLeft: spacing.xlarge,
    paddingRight: spacing.default,
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xsmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: spacing.large,
  },
  inputWrapper: {flex: 1},
  iconWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.BLUE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {height: 50, width: 50, resizeMode: 'contain'},
});
