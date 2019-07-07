import React from 'react';
import {View, Text, Button} from "react-native";
import {NavigationInjectedProps,} from 'react-navigation';
import {navScreens} from "../AppWrapper/NavigatintWrapper";


class Auth extends React.Component<NavigationInjectedProps> {


    static navigationOptions = {
        title: 'AuthScreen'//navScreens.AuthScreen,
    };

    render() {
        const navigation = this.props.navigation;
        return <View>
            <Text>Auth Screen</Text>
            <Button title="Auth" onPress={() => {
                navigation.navigate(navScreens.ShareScreen);
                // navigation.navigate(navScreens.FindScreen);
            }}/>
        </View>;
    }
}

export default Auth
