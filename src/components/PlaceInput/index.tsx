import React from 'react';
import { Button, StyleSheet, TextInput, View, } from "react-native";

interface IState {
    placeName: string
}

interface IProps {
    onAdd: (s: string) => void
}

export default class PlaceInput extends React.Component <IProps, IState> {

    state: IState = {
        placeName: '',
    };

    private handlerEdit = (placeName: string) => {
        this.setState({placeName})
    };

    private handleAdd = () => {
        this.props.onAdd(this.state.placeName);
        this.clearInput();
    };

    private clearInput = () =>  this.setState({placeName: ''});

    render(): React.ReactNode {
        return (
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.placeName}
                        onChangeText={(e) => this.handlerEdit(e)}
                        placeholder="An awesome place"
                    />
                    <Button color={"blue"} title="Add" onPress={this.handleAdd}/>
                </View>
        );
    }


};

const styles = StyleSheet.create({

    form: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        alignItems: 'center'

    },
    textInput: {
        width: '70%',
    },
    button: {
        width: '30%'

    },
});

