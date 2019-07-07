import React from 'react';
import {StyleSheet, View,} from "react-native";
import PlaceInput from "../PlaceInput";
import PlaceList from "../PlaceList";
import PlaceDetail from "../PlaceDetail";
import {connect} from 'react-redux'
import {TPlace} from "../../store/reducers/places";
import {addPlace, deletePlace, deselectPlace, selectPlace} from "../../store/actions";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {navScreens} from "../AppWrapper/NavigatintWrapper";

interface IProps {
    onAddPlace: (name: string) => void,
    onDeletePlace: () => void,
    onSelectPlace: (key: number) => void,
    onDeselectPlace: () => void,
    places: TPlace[]
    selectedPlace: TPlace | null
    // navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

class FindPlace extends React.Component<IProps> {

    // static navigationOptions = {
    //     title: navScreens.FindScreen,
    // };

    handleAdd = (name: string) => this.props.onAddPlace(name);

    handleDelete = () => this.props.onDeletePlace();

    handleClose = () => this.props.onDeselectPlace();

    handleSelect = (index: number) => this.props.onSelectPlace(index);

    render(): React.ReactNode {
        return <View style={styles.root}>
            <PlaceDetail
                place={this.props.selectedPlace}
                onClose={this.handleClose}
                onDelete={this.handleDelete}
            />
            <PlaceInput onAdd={this.handleAdd}/>
            <PlaceList onItemSelect={this.handleSelect} places={this.props.places}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',

    }
});

const mapStateToProps = (state: any) => ({
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,

});

const mapDispachToProps = (dispach: any) => ({
    onAddPlace: (name: string) => {
        const out = addPlace(name);
        dispach(out)
    },
    onDeletePlace: () => {
        dispach(deletePlace())
    },
    onSelectPlace: (key: number) => {
        dispach(selectPlace(key))
    },
    onDeselectPlace: () => {
        dispach(deselectPlace())
    }
});

export default connect(mapStateToProps, mapDispachToProps)(FindPlace)
