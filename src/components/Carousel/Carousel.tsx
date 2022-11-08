import * as React from 'react';
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {CarosuelItem} from './CarosuelItem';
import {CarosuelItemProps, CarouselProps} from './types';

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

export interface CarouselState {
  currentPage: number;
}

export const Carousel = (props: CarouselProps) => {
  const {carouselItems = [], carouselTitle = ''} = props;
  const renderItem: ListRenderItem<CarosuelItemProps> = ({item}) => {
    return <CarosuelItem {...item} />;
  };
  const keyExtractor = ({item}: {item: CarosuelItemProps}) => {
    return item.id;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{carouselTitle}</Text>
      <FlatList
        data={carouselItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        ItemSeparatorComponent={({}) => <View style={[styles.separator]} />}
      />
    </SafeAreaView>
  );
};
