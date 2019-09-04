/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './source/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);

