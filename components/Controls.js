import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Button = ({ text, special, style }) => {
    return (
        <View style={[styles.button, special ? styles.special: null, style||null]}>
            <Text 
                style={{
                    color:special ? colors.white:null,
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


const Controls = () => {
    return (
        <View style={styles.wrapper}>
            
            <View style={styles.buttons}>
                {[7, 8, 9, 'DEL'].map((each, i) => {

                    return <Button
                        text={each}
                        key={i}
                        special={i == 3}
                        />
                })}
            </View>

            <View style={styles.buttons}>
                {[4, 5, 6, '+'].map((each, i) => {

                    return <Button
                        text={each}
                        key={i}
                        />
                })}
            </View>

            <View style={styles.buttons}>
                {[1, 2, 3, '-'].map((each, i) => {

                    return <Button
                        text={each}
                        key={i}
                        // special={i==3}
                         />
                })}
            </View>


            <View style={styles.buttons}>
                {['.', 0, '/', 'x'].map((each, i) => {

                    return <Button
                        text={each}
                        key={i}
                        // special={i == 3} 
                        />
                })}
            </View>


            <View style={[styles.buttons,]}>

                <Button
                    text={"RESET"}

                    special={true}
                />


                <Button
                    text={"="}
                    special={true}
                    style={
                        {
                            backgroundColor:colors.orange,
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
        backgroundColor: colors.grayishRed,
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
        backgroundColor:colors.grayishYellow,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5,
        flex:1,
        borderRadius: 10,
        elevation:3,
    },
    special:{
        backgroundColor:colors.darkCyan,
    }
})