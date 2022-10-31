import axios from 'axios';
import { ItemType } from '../types/types';

const BASE_URL = 'https://api.privatbank.ua/p24api';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getItems1() {
    return instance.get<ItemType[]>('/pubinfo?json&exchange&coursid=5')
  },
  getItems2() {
    return instance.get<ItemType[]>('/pubinfo?json&exchange&coursid=4')

  }
}
