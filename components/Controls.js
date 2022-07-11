import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Button = ({ text, special, style, theme, pressAction }) => {
    const specialStyle = theme === 'light' ? styles.specialLight : styles.specialDark;

    // const specialTextStyle = theme === 'light' ? styles.textLight : styles.textDark;

    const themeStyle = theme === 'light' ? styles.buttonLight : styles.buttonDark


    let textColor = theme === 'light' ? colors.dark : colors.veryDarkGrayishBlue
    
    if(special){
        textColor = colors.white
    }
    // special ? colors.white
    
    return (
        <TouchableOpacity
            onPress={()=>pressAction(text)}
            style={
                [
                    styles.button,
                    themeStyle,
                    special ? specialStyle : null,
                    style || null,

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
                
            
        </TouchableOpacity>
    )
}


const Controls = ({ theme, screenValue,updateScreen, clearScreen }) => {



    const calculate = ()=>{
        // console.log(typeof screenValue)
        let value = screenValue.toLowerCase().split('').map(e=>{
            if (e === 'x') return '*'
            if (e === '−') return '-'

            return e
        }) //.replace(`/${`['x']`}/g`, `*`);
        // value = value.replace(`/${'−'}/g`, `-`); //.replaceAll('−', '-');

        // console.log(value);
        let calculate = eval(value.join('')).toFixed(5);


        return calculate;
    }

    const handlePress = (val)=>{
        // console.log()

        let isAction = ['=', 'RESET', 'DEL'].includes(val);

        if (!isAction) {
            if (typeof screenValue === 'number') {
                // clearScreen(val)
                screenValue = String(screenValue);
            }
            updateScreen(screenValue + val)
            return

        }


        if (val === 'RESET') {
            // actions.is__clear();
            clearScreen()
            return
        }

        if (val === '=') {
            let cal = calculate();
            clearScreen(cal)
            return
        }
        
        if (val === 'DEL') {
            updateScreen(String(screenValue).substr(0,screenValue.length-1))
            return
        }

        

    }

    return (
        <View style={[styles.wrapper, theme === 'light' ? styles.wrapperLight : styles.wrapperDark]}>
            
            <View style={[styles.buttons, ]}>
                {[7, 8, 9, 'DEL'].map((each, i) => {

                    return <Button
                        text={each}
                        pressAction={handlePress}
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
                        pressAction={handlePress}
                        theme={theme}
                        key={i}
                        />
                })}
            </View>

            <View style={styles.buttons}>
                {[1, 2, 3, '-'].map((each, i) => {

                    return <Button
                        text={each}
                        pressAction={handlePress}
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
                        pressAction={handlePress}
                        theme={theme}
                        key={i}
                        // special={i == 3} 
                        />
                })}
            </View>


            <View style={styles.buttons}>

                <Button
                    text={"RESET"}
                    pressAction={handlePress}
                    theme={theme}

                    special={true}
                />


                <Button
                    text={"="}
                    pressAction={handlePress}
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