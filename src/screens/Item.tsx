import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { ItemPropsType } from '../types/types';

export const Item: FC<ItemPropsType> = ({ route }) => {

  const { sale, buy, ccy } = route.params.currentData;

  const [value, setValue] = useState<number | undefined>(undefined);
  const [isSelling, setIsSelling] = useState(true);
  const [result, setResult] = useState<number>(0);

  const calculate = () => {
    if (value) {
      isSelling
        ? setResult(value * +sale)
        : setResult(value * +buy);
    } else {
      setResult(0);
    }
  };

  useEffect(() => {calculate();}, [value, isSelling]);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 40 }}>{ccy}</Text>
      <Text style={{ fontSize: 20 }}>Buy: {Number(buy).toFixed(2)} UAH</Text>
      <Text style={{ fontSize: 20 }}>Sale: {Number(sale).toFixed(2)} UAH</Text>
      <View style={styles.inputs}>
        <View style={styles.amount}>
          <Text style={{ fontSize: 20 }}>Amount: </Text>
          <TextInput
            style={styles.value}
            maxLength={7}
            onChangeText={(value) => setValue(+value)}
            value={value && value.toString() || undefined}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.isSelling}>
          <Text style={{ fontSize: 20 }}>Purchase</Text>
          <Switch
            style={{ marginHorizontal: 10 }}
            onValueChange={() => setIsSelling(!isSelling)}
            value={isSelling}
          />
          <Text style={{ fontSize: 20 }}>Selling</Text>
        </View>
      </View>
      <Text style={{ fontSize: 30 }}>Result: {result.toFixed(2)} UAH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    flex: 0.3,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  value: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  isSelling: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
