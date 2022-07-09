/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import WhiteLogo from '../components/WhiteLogo';
import {Background} from '../components/Background';

type splashScreenProp = StackNavigationProp<any, 'SplashScreen'>;

export const SplashScreen = () => {
  const navigation = useNavigation<splashScreenProp>();

  useEffect(() => {
    let user: any;
    let time: any;
    if (user === undefined) {
      time = setTimeout(() => {
        navigation.replace('Login');
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
