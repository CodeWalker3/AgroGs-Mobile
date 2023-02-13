import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonGreen({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginLeft:20,
    marginRight:20,
    marginHorizontal:40,
    borderRadius: 32,
    elevation: 3,
    backgroundColor: '#1C9059',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});