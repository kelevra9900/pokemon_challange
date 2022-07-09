/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import WhiteLogo from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {AuthContext} from '../context/AuthContext';

type splashScreenProp = StackNavigationProp<any, 'SplashScreen'>;

export const SplashScreen = () => {
  const navigation = useNavigation<splashScreenProp>();
  const {status} = useContext(AuthContext);

  useEffect(() => {
    let time: any;
    if (status === 'not-authenticated') {
      console.log('Not authenticated');
      time = setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
    } else {
      console.log('Authenticated');
      time = setTimeout(() => {
        navigation.replace('Home');
      }, 3000);
    }
    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  }, []);

  return (
    <>
      <Background />
      <View style={[styles.container, {flexDirection: 'column'}]}>
        <View style={{flex: 1}} />
        <WhiteLogo />
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
