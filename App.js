import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { Profiles } from './assets/Profiles';
//import { Fonts } from './assets/Fonts';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  const MTLImage = () => {
    return (
      <View style={styles.container}>
        <Image 
        style = {styles.image}
        source = {('Profiles.mtl')}
        />
        
      </View>
      
    )
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
        }}>
        Open up App.js to start working on your app!
      </Text>
      <Text
        style={{
          fontFamily: 'SydneyBold', // test to see if the font is loaded, feel free to remove this
        }}>
        ~Good luck~
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  }

});


