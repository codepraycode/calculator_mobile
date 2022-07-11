import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Display = ({ theme, screenValue }) => {
    
    return (
        <View style={styles.wrapper}>
            
            <View style={[styles.screen, theme === 'light' ? styles.screenLightMode : styles.screenDarkMode]}>
                <Text 
                    style={[styles.text, theme === 'light' ? styles.textLightMode : styles.textDarkMode]}
                >
                    {screenValue.length === 0 ? '0' : screenValue}
                </Text>
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
        
        borderRadius: 10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        
    },
    text:{
        fontFamily:'Spartan',
        fontWeight:"bold",
        fontSize:50,
        marginBottom: 20,
        marginRight: 20
    },


    // Themes
    screenLightMode:{
        backgroundColor: colors.veryLightGrey,
    },
    screenDarkMode:{
        backgroundColor: colors.darkBlue3,
    },


    textLightMode: {
        color:colors.dark,
    },
    textDarkMode: {
        color: colors.white,
    },
})