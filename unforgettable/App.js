import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomePage.js';
import Swiper from 'react-native-swiper';
import React from 'react';

const Stack = createNativeStackNavigator();

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
			<Swiper horizontal={false} loop={false}>
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
	);
}
