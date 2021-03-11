import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Tab from './Tab';

const {width} = Dimensions.get('screen');

export default function TabBar({state, navigation}) {
    const {routes} = state;
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map(route => {
                        console.log(route);

                        return(
                            <Tab
                                tab={route}
                                icon={
                                    route['name'] === 'Main' ? 'spotify' :
                                    route['name'] === 'Profile' ? 'internet-explorer' :
                                    route['name'] === 'Training' ? 'podcast' :
                                    route['name'] === 'Map' ? 'snapchat' :
                                    route['name'] === 'Settings' ? 'signing' : 'home'
                                }
                                // onPress={}
                                // color={}
                                key={route.key}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#570499',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10
    }
})
