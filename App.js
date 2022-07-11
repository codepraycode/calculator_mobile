import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

// Components
import Header from './components/Header';
import Display from './components/Display';
import Controls from './components/Controls';

// Styles
import styles from './assets/styles';

export default function App() {


  const [loaded] = useFonts({
    Spartan:require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  })

  if (!loaded){
    return null;
  }

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
});
