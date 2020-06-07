import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';

const MARGIN = 16 * 4;

interface propsInterface {
  data: any;
}

const TabBar = (props: propsInterface) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={({item, index}) => (
          <Item
            text={item.text}
            isActive={index === activeIndex}
            onPress={() => {
              setActiveIndex(index);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const Item = ({
  text,
  isActive,
  onPress,
}: {
  text: string;
  isActive: boolean;
  onPress: Function;
}) => (
  <TouchableOpacity
    style={{marginRight: MARGIN}}
    onPress={() => onPress()}
    activeOpacity={1}>
    <Text style={isActive ? styles.activeTextStyle : styles.inActiveTextStyle}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeTextStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.BLACK1,
  },
  inActiveTextStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.BLACK3,
  },
});
