import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomePage.js";
import Swiper from "react-native-swiper";
import { openDatabase } from 'react-native-sqlite-storage';

const Stack = createNativeStackNavigator();

// Variable to access database
var db = openDatabase({ name: 'UserProfile.db' });


export default function App() {
  return (
    <Swiper showsButtons={true}>
      <Swiper
          horizontal={false}
          loop={false}
          showsButtons={true}>
          <View>
            <Text>TOP</Text>
          </View>
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