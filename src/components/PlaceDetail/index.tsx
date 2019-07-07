import React from 'react';
import {Button, Modal, StyleSheet, View, Text, Image, TouchableOpacity as Touchable} from "react-native";
import {TPlace} from "../../store/reducers/places";
// import {Icon} from "react-native-vector-icons/Icon";
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
    place: TPlace | null
    onDelete: () => void
    onClose: () => void
}

const PlaceDetail = ({place, onDelete, onClose}: IProps) =>
    <Modal onRequestClose={onClose} visible={place != null} animationType="slide">
        {place && <View style={styles.root}>
            {place.image && <Image style={styles.placeImage} source={place.image}/>}
            <Text style={styles.placeName}>{place.name}</Text>
            <View>
                <Touchable onPress={onDelete}>
                    <View style={styles.deleteBtn}>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </View>
                </Touchable>
                <Button title="Close" onPress={onClose}/>
            </View>
        </View>}
    </Modal>;


const styles = StyleSheet.create({
    root: {
        // margin: 32
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    deleteBtn:{
        alignItems: 'center'
    }
});

export default PlaceDetail
