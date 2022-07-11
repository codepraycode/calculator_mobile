import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles';

// Components
import Header from './components/Header';
import Display from './components/Display';
import Controls from './components/Controls';



export default function App() {
  return (
    <View style={screen_styles.container}>
      
      <Header/>

      <Display/>

      <Controls/>

      <StatusBar style="auto"/>
    </View>
  );
}

const screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styles.lightGray,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:80

  },


  
  controls:{
    backgroundColor:styles.grayishRed,
    width:'90%',
    borderRadius:10,
    paddingHorizontal:10,
    
  },
  paddingBottom:{
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
    // width:70,
    height:50,
    backgroundColor:styles.grayishYellow,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    flex:1,
    borderRadius:8,
    elevation:4,
  }
});
