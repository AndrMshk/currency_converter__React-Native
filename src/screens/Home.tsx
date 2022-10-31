import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../redux/store';
import { ItemType, useAppNavigation } from '../types/types';

export const Home = () => {

  const navigation = useAppNavigation();

  const items = useAppSelector(state => state.data.items);

  const currentDate = new Date();

  const renderItem: ListRenderItem<ItemType> = ({ item }) => {
    return (
      <View style={styles.items}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Item', { currentData: item });
        }}>
          <Text style={styles.item}>{item.ccy}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Currency converter</Text>
        <Text style={styles.choose}>choose currency:</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.ccy}
        />
      </View>
      <Text style={styles.date}>
        Date: {currentDate.getDate()}.{currentDate.getMonth()}.{currentDate.getFullYear()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  items: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  choose: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10
  },
  item: {
    marginVertical: 10,
    fontSize: 30,
  },
  date: {
    position: 'absolute',
    top: '80%',
    right: '10%',
  },
});
