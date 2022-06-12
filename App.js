import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles';


const Button = ()=>{
  return (
    <View style={screen_styles.button}>
      <Text>1</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={screen_styles.container}>
      <View style={screen_styles.header}>
        <View>
          <Text style={{fontSize:30}}>CALC</Text>
        </View>

        <View style={screen_styles.toogle}/>

      </View>


      <View style={screen_styles.screen}/>

      <View style={screen_styles.controls}>
        <View style={screen_styles.buttons}>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </View>

        <View style={screen_styles.buttons}>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </View>

        <View style={screen_styles.buttons}>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
        </View>


        <View style={[screen_styles.buttons, screen_styles.last]}>
          <Button/>
          <Button/>
          
        </View>


        
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styles.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'80%'
  },
  toogle:{
    width:30,
    height:30,
    backgroundColor:styles.grayishRed,
  },
  screen:{
    width:'80%',
    height:100,
    backgroundColor:styles.veryLightGrey,
  },
  controls:{
    backgroundColor:styles.grayishRed,
    // paddingVertical:20,
    width:'80%',
    // flexDirection:'row'
  },
  last:{
    paddingBottom:20,
  },
  buttons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    paddingTop:20,
  },
  
  button:{
    width:50,
    height:50,
    backgroundColor:styles.grayishYellow,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
    flex:1,
  }
});
