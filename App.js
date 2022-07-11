import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import {useState} from 'react';

// Components
import Header from './components/Header';
import Display from './components/Display';
import Controls from './components/Controls';

// Styles
import styles from './assets/styles';

export default function App() {


  const [loaded] = useFonts({
    Spartan:require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });

  const phoneColorScheme = useColorScheme();


  const [appTheme, setAppTheme] = useState(phoneColorScheme);


  const [screenValue, setScreenValue] = useState('');
  

  const updateScreen = (val)=>{
    setScreenValue(()=>{
      return val
    })
  }

  const clearScreen = (val='') => {
    setScreenValue(() => {
      return val
    })
  }

  const toggleTheme = () => {

    setAppTheme((prev) => {
      if (prev === 'light') {
        return 'dark'
      }

      return 'light'
    })

  }

  if (!loaded){
    return null;
  }


  


  const themeStyle = appTheme === 'light' ? screen_styles.lightMode : screen_styles.darkMode

  return (
    <View style={[screen_styles.container, themeStyle]}>
      
      <Header theme={appTheme} toggleTheme={toggleTheme}/>

      <Display theme={appTheme} screenValue={screenValue}/>

      <Controls theme={appTheme} screenValue={screenValue} updateScreen={updateScreen} clearScreen={clearScreen}/>

      <StatusBar style="auto"/>
    </View>
  );
}

const screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:80

  },

  lightMode: {
    backgroundColor: styles.lightGray,
  },

  darkMode:{
    backgroundColor: styles.darkBlue1,
  }
});
