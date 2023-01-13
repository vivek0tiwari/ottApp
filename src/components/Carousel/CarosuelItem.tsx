import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppConfigProvider} from '../../AppContext';
import {getImageURL} from '../../utils';
import {CarosuelItemProps} from './types';
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 180,
    borderRadius: 4,
  },
});

export const CarosuelItem = (item: CarosuelItemProps) => {
  const {poster_path = ''} = item;
  const myContext = React.useContext(AppConfigProvider);
  console.log('myContext', getImageURL(myContext.secure_base_url, poster_path));
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.container}
        source={{
          uri: getImageURL(myContext.secure_base_url, poster_path),
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};
