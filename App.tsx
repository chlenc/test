import React from 'react';
import { StyleSheet, View, } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";

interface IState {
    places: string[]
}

interface IProps {
}

export default class App extends React.Component <IProps, IState> {

    state: IState = {
        places: ['Moscow', 'London', 'Paris']
    };

    handleAdd = (placeName: string) => this.setState({places: [...this.state.places, placeName]});

    render(): React.ReactNode {
        return <View style={styles.root}>
            <PlaceInput onAdd={this.handleAdd}/>
            <PlaceList places={this.state.places}/>
        </View>
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',

    }
});

