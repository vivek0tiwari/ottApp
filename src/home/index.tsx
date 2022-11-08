import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Page} from '../layout-parser/Page';
import {ActionType} from '../layout-parser/types';

const bannerData = {
  backgroundImage:
    'http://image.tmdb.org/t/p/w780/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
  genres: ['Charming', 'Drama', 'Movie'],
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 12,
    fontWeight: '800',
  },
  separator: {
    width: 8,
  },
});
export const HomeScreen = ({navigation}) => {
  const [data, setData] = React.useState();
  const layoutRequestObject = React.useRef({});

  const actionHandler = (type: ActionType, data: any) => {};
  return (
    <View style={styles.container}>
      <Page
        pageTitle="Home Page"
        actionHandler={actionHandler}
        requestObject={layoutRequestObject}
        layoutRequestObject={layoutRequestObject}
      />
    </View>
  );
};
