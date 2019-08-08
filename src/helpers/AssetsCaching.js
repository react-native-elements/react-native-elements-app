import { loadAsync } from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheFonts = fonts => {
  return fonts.map(font => loadAsync(font));
};

export const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
