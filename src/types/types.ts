import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStack = {
  Home: undefined
  Item: { currentData: ItemType }
}

export type ItemType = {
  ccy: string
  base_ccy: string
  buy: string
  sale: string
}

export type ItemPropsType = NativeStackScreenProps<RootStack, 'Item'>

export type NavigationUseType = NavigationProp<RootStack>

export const useAppNavigation = () => useNavigation<NavigationUseType>();
