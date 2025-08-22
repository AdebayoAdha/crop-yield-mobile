import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import PredictionScreen from './src/screens/PredictionScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#16a34a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Crop Yield Prediction' }}
        />
        <Stack.Screen 
          name="Weather" 
          component={WeatherScreen} 
          options={{ title: 'Weather Data' }}
        />
        <Stack.Screen 
          name="Prediction" 
          component={PredictionScreen} 
          options={{ title: 'Crop Prediction' }}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ title: 'Prediction Results' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}