import {useScreens} from 'react-native-screens';

/* React Navigation */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

/* Screens */
import SignInScreen from './containers/Auth/SignIn/SignInScreen';
import AuthLoadingScreen from './containers/Auth/AuthLoadingScreen';
import ControlScreen from './containers/Main/ControlScreen';
import EstadisticaScreen from './containers/Main/EstadisticaScreen';

const AppStack = createMaterialBottomTabNavigator(
  {
    Control: {
      screen: ControlScreen,
    },
    Estadisticas: {
      screen: EstadisticaScreen,
    },
  },
  {
    initialRouteName: 'Control',
    showIcon: true,
    activeColor: '#CDDC39',
    inactiveColor: 'white',
    barStyle: {backgroundColor: '#689F38'},
  },
);

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
});

export const Router = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
