import React, {useState} from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../components/card';
import Input from '../components/Input'

export default function Home() {
  const img = {
  car: require('../../assets/testando.jpg'),
  test: require('../../assets/testando.jpg'),
  ola: require('../../assets/testando.jpg')
}

  const PRODUCTS = [
    {id:1,
    name:"mano",
    price:12,
    image: img.car},
    {id:2,
      name:"teste",
      price:12,
      image: img.car},
    {id:3,
      name:"teste",
      price:12,
      image: img.car},
    {id:4,
      name:"teste",
      price:12,
      image: img.car},
    {id:5,
        name:"teste",
        price:12,
        image: img.car},
  ]
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = PRODUCTS.filter(product => product.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredProducts(filtered);
  }

  const navigation = useNavigation();
  return (
      <View style={styles.container}>
      <View>
        <View style={styles.text_container}>
          <Text style={styles.title1}>Products</Text>
        </View>
        <View style={styles.input_position}>
          <Input 
            placeholder="Search" 
            onChangeText={handleSearch}
            value={searchText}
          />
        </View>
        <View style={styles.list_container}>
          <FlatList 
            data={filteredProducts}
            renderItem={({item}) => 
            <View style={styles.item_container}>
            <Card name={item.name} price={item.price} img={item.image} />
            
            </View>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    maxHeight:'100%',
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    rowGap:18
  },
  title1:{
    
    fontWeight: '600',
    fontSize: 30,
    color: '#1C9059',
  },
  text_container:{
    marginTop:'15%',
    alignSelf:'center'
  },
  input_position:{
    marginTop:16
  },
  deals_container:{
    marginTop:32,
    marginLeft:16
  },
  list_container:{
    marginLeft:30,
    marginTop:16
  },
  item_container:{
    marginTop:20
  },
  subtitle:{
    fontSize:24,
    color: '#1C9059',
    textAlign:'center'

  }
  
})