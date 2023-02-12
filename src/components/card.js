import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../styles/styles'


export const Card = (props) =>{

    return(
      <View>
       <TouchableOpacity style={styles.container}>
        <ImageBackground
        style={styles.cover}
        source={props.img}
        >
        <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.footer}>
         <Text style={styles.name}>
            {props.name}
         </Text>
         <Text style={styles.price}>
            {props.price}
         </Text>   
        </LinearGradient>
        </ImageBackground>
        
       </TouchableOpacity>
       </View>
    )
}