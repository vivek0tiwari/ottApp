import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {AppConfigProvider} from '../AppContext';
import {Widget} from '../components/Carousel/types';
import {getLayoutData} from '../repository/homePageData.API';
import {PageProps, RequestObj} from './types';

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

export interface PageState {
  layoutData: any;
  data: string;
  nextPageRequest: RequestObj;
}

export const Page = (props: PageProps, childern: any) => {
  const [layoutData, setLayoutData] = React.useState({});
  useEffect(() => {
    async function getData() {
      alert('hii')
      const _layoutData = await getLayoutData();
      setLayoutData(_layoutData);
    }
    getData();
  }, [setLayoutData]);
  const renderItem = ({item: any}) => {
    return <Text>Hello world</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={layoutData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.hash}
        horizontal={true}
        ItemSeparatorComponent={({}) => <View style={[styles.separator]} />}
      />
      {childern}
    </SafeAreaView>
  );
};
