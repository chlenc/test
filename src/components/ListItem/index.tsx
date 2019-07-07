import React from 'react';
import {StyleSheet, Text, TouchableOpacity as Touchable, View, Image, ImageSourcePropType} from "react-native";

interface IProps {
    placeName: string
    onItemPressed: (e: any) => void
    placeImage?: ImageSourcePropType
}

const ListItem = ({placeName, onItemPressed, placeImage}: IProps) =>
    <Touchable onPress={onItemPressed}>
        <View style={styles.listItem}>
            {placeImage &&
            <Image source={placeImage} style={styles.placeImage}/>
            }
            <Text>{placeName}</Text>
        </View>
    </Touchable>;

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        width: 30,
        height: 30
    }
})

export default ListItem
