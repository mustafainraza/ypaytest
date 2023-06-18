import {View, Text, FlatList, StyleSheet, VirtualizedList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Task2() {
  const Items = useSelector(state => state.itemlist);

  const RenderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.data}</Text>
      <Text style={styles.text}>{item.number}</Text>
    </View>
  );

  const getItemCount = Items => {
    return Items.length;
  };

  const getItem = (Items, index) => {
    return Items[index];
  };

  const keyExtractor = (item, index) => {
    return `default_${index}`;
  };
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black',
        }}>
        VirtualizedList With Redux State Management{' '}
      </Text>
      {Items.length < 1 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptytext}>Add Items To List, First</Text>
        </View>
      ) : (
        <VirtualizedList
          style={{marginTop: '10%'}}
          initialNumToRender={4}
          data={Items}
          getItemCount={getItemCount}
          getItem={getItem}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 18, color: 'white'},
  emptytext: {
    fontSize: 18,
    color: '#003047',
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    margin: 15,
    backgroundColor: '#003047',
    borderRadius: 25,
  },
  emptyView: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
