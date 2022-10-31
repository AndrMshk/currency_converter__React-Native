import React, { useEffect } from 'react';
import { useAppDispatch } from './redux/store';
import { getItems } from './redux/dataReducer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStack } from './types/types';
import { Home } from './screens/Home';
import { Item } from './screens/Item';

const Stack = createNativeStackNavigator<RootStack>();

export const Main = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {dispatch(getItems());}, []);

  return (

    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name={'Item'}
        component={Item}
        options={({ route }) => ({ title: route.params.currentData.ccy })}
      />
    </Stack.Navigator>

  );
};


