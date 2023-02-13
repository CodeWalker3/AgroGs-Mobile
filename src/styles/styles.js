import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginRight:24,
  },
  cover: {
    width:340,
    height:350,
    justifyContent:'flex-end',
    borderRadius: 8,
    overflow: 'hidden'
  },
  footer: {
    width: '100%',
    height:102,
    padding:16,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color:"#ffffff"
  },
  price: {
    fontSize: 14,
    color:'#1C9059',
  }
})