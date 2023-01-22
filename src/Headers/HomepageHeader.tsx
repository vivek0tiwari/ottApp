import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import Cast from '../Logo/Cast';
import MainLogo from '../Logo/MainLogo';
import Profile from '../Logo/Profile';
import Search from '../Logo/Search';
import {ChromecastIcon, SearchIcon} from '../Logo';
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0008',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    maxWidth: 300,
  },
  logoItem: {
    marginRight: 18,
    color: '#000',
  },
});

export const HomePageHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <MainLogo height={48} width={128} />
      <View style={styles.logoContainer}>
        <ChromecastIcon style={styles.logoItem} fill={'#fff'} />
        <SearchIcon style={styles.logoItem} fill={'#fff'} />
        <Profile style={styles.logoItem} />
      </View>
    </View>
  );
};
