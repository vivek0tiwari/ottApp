import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, StatusBar} from 'react-native';
import {HomePageHeader} from '../Headers/HomepageHeader';
import {LayoutEngine} from '../layout-parser/LayoutEngine';
import {Page} from '../layout-parser/Page';
import {ActionType} from '../layout-parser/types';

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

  const actionHandler = (type: ActionType, data: any) => {};
  return (
    <Page style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <LayoutEngine
        actionHandler={actionHandler}
        renderHeader={() => <HomePageHeader />}
      />
    </Page>
  );
};
