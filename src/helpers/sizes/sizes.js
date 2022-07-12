import {Dimensions} from 'react-native';

export const ratio = Dimensions.get('window').width / 375;

export const Sizes = {};

for (let i = 1; i < 500; i++) {
  Sizes[`size${i}`] = i * ratio > i ? i : i * ratio;
}
