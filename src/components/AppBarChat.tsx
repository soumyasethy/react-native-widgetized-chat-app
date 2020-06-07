import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {_goBack} from '../navigator/_goToPage';
import {fonts} from '../utils/fonts';
import {spacing} from '../utils/spacing';
import {colors} from '../utils/colors';

const AppBarChat = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={_goBack} style={styles.backButtonStyle}>
          <Image
            source={require('../assets/back.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <View style={styles.primaryTextWrapper}>
          <Text style={styles.primaryTextStyle}>{props.data.primaryText}</Text>
          <View style={{flexDirection: 'row', marginTop: spacing.xsmall}}>
            <Text style={styles.secondaryTextStyle}>
              {props.data.secondaryText}
            </Text>
            <View
              style={[
                styles.indicatorStyle,
                {backgroundColor: props.data.indicatorColor},
              ]}
            />
          </View>
        </View>
      </View>
      <Image
        source={require('../assets/three_dot.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default AppBarChat;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: spacing.default,
  },
  container2: {flexDirection: 'row', marginTop: spacing.default},
  imageStyle: {width: 20, height: 20, resizeMode: 'contain'},
  backButtonStyle: {
    paddingTop: spacing.xsmall,
    paddingLeft: spacing.default,
    paddingBottom: spacing.xlarge,
  },
  indicatorStyle: {
    height: 6,
    width: 6,
    borderRadius: 3,

    marginTop: spacing.xsmall,
    marginLeft: spacing.xsmall,
  },
  primaryTextWrapper:{flexDirection: 'column', marginLeft: spacing.default},
  primaryTextStyle: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.bold,
    color: colors.BLACK1,
  },
  secondaryTextStyle: {
    fontSize: fonts.size.xsmall,
    fontWeight: fonts.weight.light,
    color: colors.BLACK2,
  },
});
