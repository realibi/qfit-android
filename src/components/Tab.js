import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tab({color, tab, onPress, icon}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name={icon} size={30} color="#fff" />
            <Text style={styles.text}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        marginTop: 6
    }
})
