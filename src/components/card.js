import { ImageBackground, TouchableOpacity } from "react-native";
import { styles } from '../styles/styles'


export default function Card({dataProps}){

    return(
       <TouchableOpacity style={styles.container}>
        <ImageBackground
        style={styles.cover}
        source={dataProps.image_url}
        >
        <linearGradient
        style={styles.footer}>
         <Text style={styles.name}>
            {dataProps.name}
         </Text>
         <Text style={styles.price}>
            {dataProps.price}
         </Text>   
        </linearGradient>
        </ImageBackground>
        
       </TouchableOpacity>
    )
}