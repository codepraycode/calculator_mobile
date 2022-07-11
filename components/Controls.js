import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Button = ({ text, special, style, theme }) => {
    const specialStyle = theme === 'light' ? styles.specialLight : styles.specialDark;

    // const specialTextStyle = theme === 'light' ? styles.textLight : styles.textDark;

    const themeStyle = theme === 'light' ? styles.buttonLight : styles.buttonDark


    let textColor = theme === 'light' ? colors.dark : colors.veryDarkGrayishBlue
    
    if(special){
        textColor = colors.white
    }
    // special ? colors.white
    
    return (
        <View 
            style={
                [
                    styles.button, 
                    themeStyle,
                    special ? specialStyle : null,
                    style||null,
                    
                ]
            }
        >
            <Text 
                style={{
                    color: textColor,
                    fontSize:20,
                    fontWeight:'bold',
                    fontFamily: 'Spartan',
                }}

            >
                    {text}
            </Text>
        </View>
    )
}


const Controls = ({theme}) => {
    return (
        <View style={[styles.wrapper, theme === 'light' ? styles.wrapperLight : styles.wrapperDark]}>
            
            <View style={[styles.buttons, ]}>
                {[7, 8, 9, 'DEL'].map((each, i) => {

                    return <Button
                        text={each}
                        theme={theme}
                        key={i}
                        special={i == 3}
                        />
                })}
            </View>

            <View style={styles.buttons}>
                {[4, 5, 6, '+'].map((each, i) => {

                    return <Button
                        text={each}
                        theme={theme}
                        key={i}
                        />
                })}
            </View>

            <View style={styles.buttons}>
                {[1, 2, 3, '-'].map((each, i) => {

                    return <Button
                        text={each}
                        theme={theme}
                        key={i}
                        // special={i==3}
                         />
                })}
            </View>


            <View style={styles.buttons}>
                {['.', 0, '/', 'x'].map((each, i) => {

                    return <Button
                        text={each}
                        theme={theme}
                        key={i}
                        // special={i == 3} 
                        />
                })}
            </View>


            <View style={styles.buttons}>

                <Button
                    text={"RESET"}
                    theme={theme}

                    special={true}
                />


                <Button
                    text={"="}
                    theme={theme}
                    special={true}
                    style={
                        

                        theme === 'light' ? 
                            {
                                backgroundColor: colors.orange,
                            }
                            : 
                            {
                                backgroundColor: colors.btnRed,
                            }
                    }
                />

            </View>

            
        </View>
    )
}
export default Controls;


const styles = StyleSheet.create({

    wrapper: {
        width: '100%',
        flex: 2,
        borderRadius: 10,
        paddingHorizontal:10,
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingTop:20,
    },
    button: {
        height:50,
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5,
        flex:1,
        borderRadius: 10,
        elevation:3,
    },
    // special:{
    //     backgroundColor:colors.darkCyan,
    // },


    // Themes

    wrapperLight:{
        backgroundColor: colors.grayishRed,
    },
    wrapperDark: {
        backgroundColor: colors.darkBlue2,
    },

    buttonLight: {
        backgroundColor: colors.grayishYellow,
    },
    buttonDark: {
        backgroundColor: colors.white,
    },

    specialLight: {
        backgroundColor: colors.darkCyan,
    },
    specialDark: {
        backgroundColor: colors.darkBlue1,
    },
})