import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Dimensions, ImageBackground, Button} from 'react-native';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    aspectRatio: 1.2,
  },
  container: {
    height: windowHeight / 2,
    marginBottom: 24,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-end',
    flex:1,
    marginBottom:12,
  },
  genres: {
    color: 'white',
  },
});
export interface BannerProps {
  imageURL: string;
  genres: Array<string>;
  backgroundImage: string;
}
export const Banner = (item: BannerProps) => {
  const {backgroundImage, genres} = item;
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: backgroundImage}} style={styles.image}>
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
          </LinearGradient>
        }
        <View>
          <Button title="Play"></Button>
        </View>
      </ImageBackground>
    </View>
  );
};
