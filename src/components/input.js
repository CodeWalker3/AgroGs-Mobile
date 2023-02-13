import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input(props) {
  const [sec, setSec] = useState(props.secureTextEntry)
 return (
  <View style={styles.container}>
    <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      placeholderTextColor={'#BDBDBD'}
      autoCorrect={false}
      {...props}
      secureTextEntry={sec}
    />
    <Icon name={props.iconName} size={26} color={'#004AAD'} style={styles.icon}/>
    {props.secureTextEntry && (
      <TouchableOpacity onPress={()=>setSec(!sec)}>
        <Icon
          name={sec ? 'eye' : 'eye-off' }
          size={26} 
          color={'#004AAD'} 
          style={styles.iconEye}
        />
      </TouchableOpacity>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
  },
  input:{
    height: 50,
    width: 370,
    backgroundColor: '#FFF',
    paddingLeft: 45,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#E4E7EB',
    borderWidth: 1.5,
    color:'#004AAD', 
  },
  icon:{
    position:'absolute',
    left: 20,
    top: 12,
  }, 
  iconEye:{
    position:'absolute',
    right: 30,
    bottom: 11,
  },  
})