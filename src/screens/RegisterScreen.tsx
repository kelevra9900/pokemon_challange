/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Keyboard,
} from 'react-native';

import WhiteLogo from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {loginStyles} from '../theme/loginTheme';
import {InputComponent} from '../components/ui/Input';
import {useForm} from '../hooks/useForm';
import {AuthContext} from '../context/AuthContext';

export const RegisterScreen = () => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const {name, email, password, password_confirmation, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }

    Alert.alert('Registro incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onRegister = () => {
    Keyboard.dismiss();
    signUp({
      name,
      email,
      password,
      password_confirmation,
    });
  };

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={loginStyles.formContainer}>
          {/* Keyboard avoid view */}

          <WhiteLogo />

          <View style={loginStyles.content}>
            {/* Name */}
            <InputComponent
              value={name}
              placeholder="Name"
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'name')}
              autoCorrect={false}
            />
            {/* Input Email */}
            <InputComponent
              value={email}
              placeholder="Email"
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'email')}
              autoCorrect={false}
            />

            {/* Input Password */}
            <InputComponent
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'password')}
              autoCorrect={false}
            />

            {/* Input Confirm Password */}
            <InputComponent
              value={password_confirmation}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#828282"
              onChangeText={(value: string) =>
                onChange(value, 'password_confirmation')
              }
              autoCorrect={false}
            />

            {/* Boton login */}
            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onRegister}>
                <Text style={loginStyles.buttonText}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
