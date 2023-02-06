import { ImageBackground } from "react-native";
import { styles } from '../styles/backgroundimg'

export default function Background({children}){

    return(
        <ImageBackground>
        {children}
        </ImageBackground>
    )
}