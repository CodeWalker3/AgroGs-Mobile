import React, { useContext, useState } from 'react';
import { View, Image,Text, TextInput, StyleSheet, Alert,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/button'
import { UserContext } from '../context/UserContext';
import Input from '../components/Input'
import { LinearGradient } from 'expo-linear-gradient';
const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        navigation.navigate('Rotas');
      } else {
        setError('Incorrect username or password. Please try again.');
      }
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
        Login
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
         iconName={'lock-outline'} 
         placeholder='Password' 
         secureTextEntry
         value={password}
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      </View>
      <View style={styles.logo_title_container}>
        <Text
        style={styles.title}
        >
          AgroGs
        </Text>
        </View>
        <View style={styles.logo_container}>
        <Image
        source={require('../../assets/leaf.png')}
        style={styles.logo}
        />
      </View>
      <View style={styles.button_separator}>
      <Button title="Login" onPress={handleLogin} />
      </View>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
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
    marginBottom:10
  },
  button:{
    color:'green'
  },
  teste:{
    opacity:.1
  },
  color:{
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
  logo:{
    width:37.04,
    height:49,
    alignSelf:'center'
  },
  logo_title_container:{
    marginTop:43
  },
  logo_container:{
    marginTop:6,
    marginBottom:22
  }
});

export default Login;
