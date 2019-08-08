import App from './App';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
