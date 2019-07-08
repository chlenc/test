import React from 'react';
import {View, Text, Button} from "react-native";
// import {
//     NavigationParams,
//     NavigationScreenProp,
//     NavigationState,
// } from 'react-navigation';

interface IProps {
    // navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Share extends React.Component<IProps> {

    // static navigationOptions = {
    //     title: 'ShareScreen'//navScreens.ShareScreen,
    // };

    render() {
        // const {navigate} = this.props.navigation;
        return <View>
            <Text>Share Screen</Text>
            <Button title="Share" onPress={() => {
                // navigation.navigate('anotherTestScreen');
            }}/>
        </View>;
    }
}

