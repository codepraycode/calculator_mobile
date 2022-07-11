import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

// Styles
import colors from '../assets/styles';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.toogle}/>
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
    borderRadius:'50%'
    // backgroundColor: styles.grayishRed,
  },
})