import React from 'react';
import { View, Text, Touchable, ImageBackground, StyleSheet } from 'react-native';
import UploadImage from '../components/UploadImage';
import { LinearGradient } from 'expo-linear-gradient';
export default function Profile({navigation}) {
 return (
   <View style={styles.container}>
    <ImageBackground
    resizeMode='cover'
    source={require("../../assets/image_background_profile.jpg")}
    style={styles.image}
    imageStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
        <LinearGradient
        style={styles.color}
        colors={['rgba(28, 144, 89, 0.8)','rgba(28, 144, 89, 0.8)']}
        resizeMode='cover'
        >
    <View style={styles.flex}>
    <Text style={styles.setting}>Settings</Text>
    <Text style={styles.title}>Profile</Text>
    <Text style={styles.font_white}> Logout</Text>
    </View>
    <View style={styles.central}>
    <UploadImage/>
    </View>
    </LinearGradient>
    </ImageBackground>
    <View>
    <Text style={styles.title2}>Gustavo</Text>
    </View>
    <View>
    <Text style={styles.subtitle}>Description</Text>
    <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Text>
    
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        justifyContent:'center',
        flex:1,
        maxHeight:245
      },
    title:{
        color:'#FFFFFF',
        textAlign:'center',
        fontWeight:'600',
        fontSize:32,
        flexDirection:'row',
        justifyContent:'center',
        
      },
    color:{
        width:'100%',
        height:'100%',
        justifyContent:'center'
      },
    flex:{
        alignItems:'center',
        justifyContent:'space-between',
        flex:1,
        marginTop:32,
        flexDirection:'row',
        width:'100%'
    },
    font_white:{
        color:'white',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:16,
    },
    central:{
        alignSelf:'center',
        overflow:'visible'
    },
    setting:{
        marginLeft:16,
        color:'white',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    title2:{
        marginTop:'10%',
        textAlign:'center',
        fontSize:30,
        fontWeight:'600',
        color:'#1C9059'
    },
    subtitle:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
        color:'#1C9059'
    },
    text:{
        fontSize:14,
        textAlign:'center',
        fontWeight:'400',
        marginHorizontal:62,
    }
})