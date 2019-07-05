import React from 'react';
import { StyleSheet, View } from "react-native";
import ListItem from "../ListItem";

interface IProps {
    placeName: string
}

const PlaceList = ({places}: { places: string[] }) =>
    <View style={styles.listContainer}>{places.map((p, i) =>
        <ListItem key={i} placeName={p} onItemPressed={() => {}}/>
        )}</View>;


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList
