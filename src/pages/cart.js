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
import CircularProgress from '../components/circleprogress';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonGreen from '../components/buttonGreen';

const ListFooter = () => {
        return (
          <ButtonGreen
          title={'Checkout all'}
          onPress={'existe'}
          />
        );
      };

export default function Cart(navigation) {
    
    const PRODUCTS = [
        {id:1,
        name:"mano",
        price:12,
        },
        {id:2,
          name:"teste",
          price:12,
          },
        {id:3,
          name:"teste",
          price:12,
          },
        {id:4,
          name:"teste",
          price:12,
          },
        {id:5,
            name:"teste",
            price:12,
            },
      ]
    return (
        <View style={styles.container}>
        <View style={styles.text_container}>
        <Text style={styles.title}>Cart</Text>
        </View>
        <View style={styles.text_container}>
        <Text style={styles.subtitle}>R$10000</Text>
        </View>
        <View style={styles.cartitem}>
        <Text style={styles.cartitem_text}>CartItem</Text>
        </View>
        <View>
        <View style={styles.list_container}>
          <FlatList 
            data={PRODUCTS}
            renderItem={({item}) => 
            <View style={styles.item_container}>
            <View style={styles.left}>
            <Icon name={"circle"}
            size={26}
            color={'#4B9460'}
            />
            <Text style={styles.font}>{item.name}</Text>  
            </View>
            <View style={styles.right}>
            <Text style={styles.font}>{item.price}R$</Text>
            </View>
            </View>
            }
            ListFooterComponent={ListFooter}
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
    },
    item_container:{
        maxHeight:'100%',
        width:360,
        display:'flex',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:32,
        flexDirection:'row'
      },
    right:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    left:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    font:{
        fontSize:16
    },
    text_container:{
        marginTop:'15%',
        alignSelf:'center'
      },
  title:{
    
    fontWeight: '600',
    fontSize: 30,
    color: '#1C9059',
  },
  subtitle:{
    fontSize:24,
    color: '#1C9059',

  },
  cartitem:{
    alignSelf:'flex-start',
    marginLeft:15,
    marginBottom:16
  },
  cartitem_text:{
    fontSize:24,
    color:'#000000'
  }
})