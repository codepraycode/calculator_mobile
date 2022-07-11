import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Display = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.screen}>
                <Text style={styles.text}>0</Text>
            </View>
        </View>
    )
}
export default Display;


const styles = StyleSheet.create({

    wrapper: {
        width: '100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    screen:{
        height:'90%',
        width:'95%',
        backgroundColor: colors.veryLightGrey,
        borderRadius: 10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        
    },
    text:{
        fontSize:50,
        marginBottom: 20,
        marginRight: 20
    }
})