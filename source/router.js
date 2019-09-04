import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import SplashScreen from './pages/splash';
import LoginScreen from './pages/login';
import RegisterScreen from './pages/register';
import DashBoardScreen from './pages/dashboard';
import DetailScreen from './pages/details';
import BagCardDetailScreen from './pages/bagsCardDetail';
import NotificationScreen from './pages/notification';
import ProfileScreen from './pages/profile';
import SettingScreen from './pages/settings';
import ForgotScreen from './pages/forgot';
import HomeserviceScreen from './pages/homeservice';
import ShopScreen from './pages/shop';
import CheckoutScreen from './pages/checkout';

const InitialNavigator = createStackNavigator({
    Splash: {screen: SplashScreen},
    Login: {screen: LoginScreen},
    Register: {screen:RegisterScreen},
    Dashboard: {screen:DashBoardScreen},
    Details: {screen:DetailScreen},
    Notifications: {screen:NotificationScreen},
    Profile: {screen:ProfileScreen},
    Settings: {screen:SettingScreen},
    Forgot: {screen:ForgotScreen},
    Homeservice: {screen:HomeserviceScreen},
    Shop: {screen:ShopScreen},
    BagCardDetail: {screen:BagCardDetailScreen},
    Checkout: {screen:CheckoutScreen},

},{
    headerMode: 'none',
    initialRouteName: 'Splash',
    transitionConfig: () => fromRight(),
});

export default createAppContainer(InitialNavigator);