

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import {createStackNavigator} from 'react-navigation-stack';
import AyahDetail from '../Screens/AyahDetail';
import QiblaDatails from '../Screens/QiblaDetails';
import ChangeView from '../DrawerScreens/ChangeView';
import DashBoard from '../DrawerScreens/DashBoard';

const Route= createStackNavigator({
        Splash:{
            screen:SplashScreen,
            navigationOptions:{
                header:null
            }
        },
        AyahDetail:{
            screen:AyahDetail,
            navigationOptions:{
                header:null
            }
        },
        QiblaDatails:{
            screen:QiblaDatails,
            navigationOptions:{
                header:null
            }
        },
        ChangeView:{
            screen:ChangeView,
            navigationOptions:{
                header:null
            }
        },
        DashBoard:{
            screen:DashBoard,
            navigationOptions:{
                header:null
            }
        },
    })
   
      
export default createAppContainer(Route);
