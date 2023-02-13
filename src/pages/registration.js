import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Image ,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button'
import Input from '../components/Input'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = async () => {
      const data = {
        username,
        password,
        email
      };

      try {
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        navigation.navigate('Login');
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.container}>
      <ImageBackground
    resizeMode='cover'
    source={require("../../assets/background_login.png")}
    style={styles.image}
    imageStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
    <LinearGradient
    style={styles.color}
    colors={['rgba(28, 144, 89, 0.8)','rgba(28, 144, 89, 0.8)']}
    resizeMode='cover'
    >
      <View style={styles.title_container}>
      <Text style={styles.title}>
      Please Register in the app!
      </Text>
      </View>
      <View style={styles.input_separator}>
      <Input
         iconName={'account'}
         placeholder='Username'
         value={username}
         onChangeText={setUsername}
         autoCapitalize='none'
         keyboardType='email-address'
        />
      </View>
      <View style={styles.input_separator}>
      <Input
         iconName={'account'}
         placeholder='Email'
         value={email}
         onChangeText={setEmail}
         autoCapitalize='none'
         keyboardType='email-address'
        />
      </View>
      <View style={styles.input_separator}>
        <Input
         iconName={'lock-outline'} 
         placeholder='Password' 
         secureTextEntry
         value={password}
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      </View>
      <View style={styles.input_separator}>
        <Input
         iconName={'lock-outline'} 
         placeholder='Password2' 
         secureTextEntry
         value={password}
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      </View>
      <Button
        title="Register"
        onPress={handleSignup}
      />
    </LinearGradient>
   </ImageBackground> 
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    justifyContent:'center',
    flex:1,
  },
  title:{
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'600',
    fontSize:32,
  },
  title_container:{
    marginTop:'15%',
    marginBottom:41
  },
  input_separator:{
    marginBottom:19,
    alignContent:'center'
  },
  button_separator:{
    marginTop:10,
    marginBottom:10
  },
  color:{
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
});

