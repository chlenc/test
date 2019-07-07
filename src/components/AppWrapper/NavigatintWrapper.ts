import {createStackNavigator, createAppContainer, NavigationRouteConfigMap} from 'react-navigation';
import Auth from "../Auth";
import FindPlace from "../FindPlace";
import Share from "../Share";

export enum navScreens {
    AuthScreen = 'AuthScreen',
    FindScreen = 'FindScreen',
    ShareScreen = 'ShareScreen',
};

// const map: NavigationRouteConfigMap = {
//     [navScreens.AuthScreen]: {
//         screen: Auth,
//         // FindScreen: {screen: FindPlace},
//         [navScreens.ShareScreen]: {screen: Share},
//     }
// }
//
//
// const MainNavigator = createStackNavigator(map);
//
// const App = createAppContainer(MainNavigator);
//
// export default App;
