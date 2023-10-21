import React from 'react';
import {StyleSheet, Dimensions, View, TextInput} from 'react-native';
import {PASSWORD_TITLE, USERNAME_TITLE} from './constants';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444455',
  },
  loginCard: {
    height: height - 425,
    width: height - 425,
    borderRadius: 34,
    backgroundColor: '#000',
    position:'absolute',
    transform: [
      {
        rotate: '45deg',
      },
      {scaleX: 2}, {scaleY: 2},
      {
        translateY: 100,
      },
      {
        translateX: 100,
      },
    ],
  },
  inputsContainer:{
    width: width,
  },
  textInput: {
    backgroundColor: '#444444',
    borderRadius: 8,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginCard}>
      </View>
      <View style={styles.inputsContainer}>
          <TextInput style={styles.textInput} placeholder={USERNAME_TITLE} />
          <TextInput style={styles.textInput} placeholder={PASSWORD_TITLE} />
        </View>
    </View>
  );
};
