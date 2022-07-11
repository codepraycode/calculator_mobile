import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Icon } from "@rneui/themed";

// Styles
import colors from '../assets/styles';


const Header = ({ theme, toggleTheme }) => {
  // const colorScheme = useColorScheme();

  // console.log(colorScheme)

  return (
    <View style={styles.wrapper}>
      {/* <View style={styles.toogle}/> */}
      {/* <Icon
        color="#0CC"
        containerStyle={{}}
        // disabledStyle={{}}
        // iconProps={{}}
        iconStyle={{}}
        name="devices"
        onLongPress={() => console.log("onLongPress()")}
        onPress={() => console.log("onPress()")}
        size={40}
        type="material"
      />       */}

      <Icon
        raised
        name= {theme === 'light' ? 'moon-o' : 'sun-o'}
        type='font-awesome'
        color='#f50'
        onPress={() => {
          // console.log('hello')
          toggleTheme()
        }
        } />
    </View>
  )
}
export default Header;


const styles = StyleSheet.create({

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'red',
    width: '95%',
    paddingRight:20,
    flex: 0.7,
  },

  toogle: {
    width: 40,
    height: 40,
    color:'white',
    backgroundColor: colors.grayishRed,
    borderRadius:50
    // backgroundColor: styles.grayishRed,
  },
})