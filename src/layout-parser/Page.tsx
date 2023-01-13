import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
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
  nextPageRequest?: RequestObj;
}

export const Page: React.FC<PageProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={props.style}>{props.children}</View>
    </SafeAreaView>
  );
};
