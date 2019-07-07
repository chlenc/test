import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ListItem from "../ListItem";
import {TPlace} from "../../store/reducers/places";

interface IProps {
    places: TPlace[]
    onItemSelect: (i: number) => void
}

const PlaceList = ({places, onItemSelect}: IProps) =>
    <FlatList
        style={styles.listContainer}
        data={places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: {key, name, image}}) =>
            <ListItem
                placeImage={image}
                key={key.toString()}
                placeName={name}
                onItemPressed={() => onItemSelect(key)}
            />
        }
    />;


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList
