import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button,
  Pressable,
} from 'react-native';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Widget} from '../layout-parser/types';
import {PlayIcon} from '../Logo';
import {TextWithIcon} from './TextWithIcon';
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
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#fff',
    border: 1,
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 8,
  },
  bannerRankingTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1,
  },
  top10RankingIcon: {
    height: 18,
    width: 18,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  top10RankingIconText: {
    fontSize: 8,
    color: '#FFF',
    fontWeight: '900',
    lineHeight: 8.5,
    textAlign: 'center',
  },
  bannerRankingText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:8
  },
});
export interface BannerProps extends Widget {
  imageURL: string;
  genres: Array<string>;
  backgroundImage: string;
  aspectRatio: number;
  currentRank: number;
  bannerRankingText: string;
}
export const Banner = (item: BannerProps) => {
  const {backgroundImage, genres, aspectRatio = 0.8, bannerRankingText} = item;
  const renderGenres = () => {
    return (
      <View style={styles.genresContainer}>
        {genres.map(g => (
          <Text key={g} style={styles.genres}>
            {` * ${g}`}
          </Text>
        ))}
      </View>
    );
  };
  const renderCurrentTending = () => {
    return (
      <View style={styles.genresContainer}>
        <View style={styles.top10RankingIcon}>
          <Text style={styles.top10RankingIconText}>{'Top\n10'}</Text>
        </View>
        <Text style={styles.bannerRankingText}>{bannerRankingText}</Text>
      </View>
    );
  };
  const renderBottomStrip = () => {
    if (bannerRankingText) {
      return renderCurrentTending();
    } else if (genres && genres.length) {
      return renderGenres();
    }
  };
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
              justifyContent: 'flex-end',
            }}>
            {renderBottomStrip()}
            <View style={styles.actionContainer}>
              <TextWithIcon
                iconName={'PlusLineIcon'}
                text="My list"
                iconProps={{
                  fill: '#fff',
                  width: 16,
                  height: 16,
                }}
                textStyleProps={{color: '#fff', fontSize: 11, marginTop: 4}}
              />
              <Pressable style={styles.playButton}>
                <PlayIcon fill={'#000'} height={12} width={12} />
                <Text style={styles.buttonText}>Play</Text>
              </Pressable>
              <TextWithIcon
                iconName={'InformationMarkCircleOutlineIcon'}
                text="Info"
                iconProps={{
                  fill: '#fff',
                  width: 16,
                  height: 16,
                }}
                textStyleProps={{color: '#fff', fontSize: 11, marginTop: 4}}
              />
            </View>
          </LinearGradient>
        }
      </ImageBackground>
    </View>
  );
};
