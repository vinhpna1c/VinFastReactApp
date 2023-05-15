import { registerRootComponent } from 'expo';

import App from './App';
import { AppRegistry ,Platform} from 'react-native';
import 'core-js/features/object/from-entries';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
if (Platform.OS == "android") {
    registerRootComponent(App);
  } else {
    AppRegistry.registerComponent('main', () => App);
  }
