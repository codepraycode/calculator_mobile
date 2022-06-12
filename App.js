import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles';


const Button = ({text, btnStyle})=>{
  return (
    <View style={[screen_styles.button,btnStyle||{}]}>
      <Text>{text}</Text>
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
          {[7,8,9,'DEL'].map((each,i)=>{

            return <Button 
                      text={each} 
                      key={i} 
                      btnStyle={
                        i==3 ? 
                          {
                            backgroundColor:styles.darkCyan,
                          }
                        :
                        null
                      } />
          })}
        </View>

        <View style={screen_styles.buttons}>
          {[4,5,6,'+'].map((each,i)=>{

            return <Button 
                      text={each} 
                      key={i} 
                      btnStyle={
                        i==3 ? 
                          {
                            backgroundColor:styles.darkCyan,
                          }
                        :
                        null
                      } />
          })}
        </View>

        <View style={screen_styles.buttons}>
          {[1,2,3,'-'].map((each,i)=>{

            return <Button 
                      text={each} 
                      key={i} 
                      btnStyle={
                        i==3 ? 
                          {
                            backgroundColor:styles.darkCyan,
                          }
                        :
                        null
                      } />
          })}
        </View>


        <View style={screen_styles.buttons}>
          {['.',0,'/','x'].map((each,i)=>{

            return <Button 
                      text={each} 
                      key={i} 
                      btnStyle={
                        i==3 ? 
                          {
                            backgroundColor:styles.darkCyan,
                          }
                        :
                        null
                      } />
          })}
        </View>


        <View style={[screen_styles.buttons, screen_styles.paddingBottom]}>

          <Button 
            text={"RESET"} 
            
            btnStyle={
              {
                backgroundColor:styles.darkCyan,
              }
            } 
          />


          <Button 
            text={"="} 
            
            btnStyle={
              {
                backgroundColor:styles.orange,
              }
            } 
          />
          
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
    width:'90%',
    marginBottom:20
  },
  toogle:{
    width:30,
    height:30,
    backgroundColor:styles.grayishRed,
  },
  screen:{
    width:'90%',
    height:100,
    backgroundColor:styles.veryLightGrey,
    marginBottom:20,
    borderRadius:10
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
