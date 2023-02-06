import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { UserContext } from '../context/UserContext';
import Input from '../components/input'
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
  
    const handleLogin = () => {
      const data = {
        username,
        password
      };
  
      fetch('http://localhost:8000/dj-rest-auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          setUser({ key: data.key });
          navigation.navigate('Home');
        })
        .catch(error => {
          console.error(error);
        });
    };

  return (
    <View style={styles.container}>
      <Input
         iconName={'account'}
         placeholder='Username'
         value={username}
         onChangeText={setUsername}
         autoCapitalize='none'
         keyboardType='email-address'
        />
    
        <Input
         iconName={'lock-outline'} 
         placeholder='Password' 
         secureTextEntry
         value={password}
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Login;
