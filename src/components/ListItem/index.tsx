import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

interface IProps {
    placeName: string
    onItemPressed: (e: any) => void
}

// @ts-ignore
const ListItem = ({placeName, onItemPressed}: IProps) =>
    <TouchableWithoutFeedback onPress={onItemPressed}>
        <View style={styles.listItem}>
            <Text>{placeName}</Text>
        </View>
    </TouchableWithoutFeedback>;

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5
    }
})

export default ListItem
