import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Dimensions, ImageBackground, Button} from 'react-native';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Widget} from '../layout-parser/types';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  image: {
    width: windowWidth,
  },
  container: {
    height: windowHeight / 1.5,
    marginBottom: 24,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 12,
  },
  genres: {
    color: 'white',
  },
});
export interface BannerProps extends Widget {
  imageURL: string;
  genres: Array<string>;
  backgroundImage: string;
  aspectRatio: number;
}
export const Banner = (item: BannerProps) => {
  const {backgroundImage, genres, aspectRatio = 0.8} = item;
  console.log(backgroundImage);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: backgroundImage}}
        style={[{...styles.image, aspectRatio}]}>
        {
          <LinearGradient
            colors={['black', 'transparent', 'black']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={{
              flex: 1,
            }}>
            <View style={styles.genresContainer}>
              {genres.map(g => (
                <Text key={g} style={styles.genres}>
                  {` * ${g}`}
                </Text>
              ))}
            </View>
            <Button title="Play"></Button>
          </LinearGradient>
        }
      </ImageBackground>
    </View>
  );
};
