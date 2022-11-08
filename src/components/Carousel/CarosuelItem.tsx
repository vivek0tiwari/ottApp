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
  const {posterPath = ''} = item;
  const myContext = React.useContext(AppConfigProvider);
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.container}
        source={{
          uri: getImageURL(myContext.base_url, posterPath),
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};
