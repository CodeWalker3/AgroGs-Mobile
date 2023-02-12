import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Card} from '../components/card'



export default function Home() {
  const img = {
  car: require('../../assets/testando.jpg')
}
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  return (
      <View style={styles.container}>
        <View style={styles.carousel}>
          <Card
          img={img.car}
          name={"Jabuti"}
          price={"12.2"}
          ></Card>
          <Card
          img={img.car}
          name={"Jabuti"}
          price={"12.2"}
          ></Card>
          <Card
          img={img.car}
          name={"Jabuti"}
          price={"12.2"}
          ></Card>
          <Card
          img={img.car}
          name={"Jabuti"}
          price={"12.2"}
          ></Card>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#004AAD',
  },
  logo:{
    flex: 2,
    justifyContent: 'center',
    alignItems:'center',
  }, 
  content:{
    flex: 1,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#004AAD'
  },
  text:{
    color: '#A1A1A1',
    fontSize: 15,
  },
  button:{
    position: 'absolute',
    backgroundColor:'#004AAD',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    bottom:'15%', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight:'bold'
  },
  carousel:{
    flexDirection:'row'
  }
})