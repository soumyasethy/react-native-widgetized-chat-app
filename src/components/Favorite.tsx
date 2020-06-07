import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import {colors} from '../utils/colors';
const MARGIN = 16 * 2;

const Favorite = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Favorites</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={({item, index}) => <ImageWithText data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const ImageWithText = (item: any) => {
  return (
    <View style={styles.imageTextWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={item.data.image} style={styles.image} />
      </View>
      <Text>{item.data.text}</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginTop: MARGIN / 2,
  },
  imageTextWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: MARGIN,
  },
  image: {height: 50, width: 50, resizeMode: 'contain'},
  imageWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: MARGIN / 8,
  },
  textTitle: {
    fontWeight: '500',
    fontSize: 15,
    color: colors.BLACK2,
    marginBottom: MARGIN / 2,
  },
  inActiveTextStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: colors.BLACK3,
  },
});
