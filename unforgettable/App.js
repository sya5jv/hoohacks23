import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomePage.js";
import { Swiper, SwiperSlide } from "react-native-swiper";

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#950abf',
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default function App() {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //           name="Homer"
  //           component={HomeScreen}
  //           options={{title: 'Welcome'}}
  //         />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <Swiper showsButtons={true}>
      <Swiper
          horizontal={false}
          loop={false}
          showsButtons={true}>
          <SafeAreaView>
            <Text style={styles.container}>TOP this is a test</Text>
          </SafeAreaView>
          <View>
          <Text>HOME</Text>
          </View>
          <View>
          <Text>BOTTOM</Text>
          </View>
        </Swiper>     
      <View>
        <Text>RIGHT1</Text>
      </View>
      <View>
        <Text>RIGHT2</Text>
      </View>
    </Swiper>
  )
}