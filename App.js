import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/routes';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent 
      />      
      <Routes />
    </NavigationContainer>
  );
}