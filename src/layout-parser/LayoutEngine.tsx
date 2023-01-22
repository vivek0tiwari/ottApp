import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {getLayoutData} from '../repository/homePageData.API';
import {getWidgetComponent} from './componentMapper';
import {LayoutEngineProps, PageProps, RequestObj, Widget} from './types';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {useConstructor} from '../hooks';

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

export interface LayoutState {
  cards?: Array<Widget>;
  nextPageRequest?: RequestObj;
}


const _dataProvider = new DataProvider((r1, r2) => {
  return r1.hash !== r2.hash;
});

export const LayoutEngine: React.FC<LayoutEngineProps> = props => {
  const [layoutData, setLayoutData] = React.useState<LayoutState>({});
  const [dataProvider, setDataProvider] = React.useState<DataProvider>(_dataProvider);
  const inProgressNetworkReq = React.useRef<boolean>(false)
  const [loading, setLoading] = React.useState(true);
  const fetchMoreData = () => {
    if (!inProgressNetworkReq.current) { 
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      inProgressNetworkReq.current = true;
      // const data = await getLayoutData(requestObject);
      inProgressNetworkReq.current = false;

      // this.setState({
      //   dataProvider: this.state.dataProvider.cloneWithRows(
      //     this.state.images.concat(images)
      //   ),
      //   images: this.state.images.concat(images),
      //   count: this.state.count + 20,
      // });
    }
  };

  const {requestObject, renderHeader} = props;
  useEffect(() => {
    async function getData() {
      const _layoutData = await getLayoutData(requestObject);
      setLayoutData(_layoutData);
      setLoading(false);
    }
    getData();
  }, [setLayoutData, requestObject]);
  const renderItem: ListRenderItem<Widget> = ({item}) => {
    const {type, ...rest} = item;
    const Comp = getWidgetComponent(type);
    return Comp && <Comp {...rest} />;
  };
  return (
    <>
      {!loading && layoutData && layoutData.cards && layoutData.cards.length ? (
        <FlatList
          data={layoutData.cards}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader && renderHeader()}
          keyExtractor={(item: Widget) => item.hash}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={({}) => <View style={[styles.separator]} />}
          
        />
      ) : (
        <Text>{'Loading'}</Text>
      )}
    </>
  );
};
