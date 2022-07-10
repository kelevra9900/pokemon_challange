/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';

import LockIcon from '../assets/Icon/Lock.svg';
import EmailIcon from '../assets/Icon/Email.svg';
import WhiteLogo from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {loginStyles} from '../theme/loginTheme';
import {Button} from '../components/ui/Button';
import {InputComponent} from '../components/ui/Input';
import {useForm} from '../hooks/useForm';

type mainScreenProp = StackNavigationProp<any, 'Main'>;

export const LoginScreen = () => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    if (errorMessage?.length === 0) {
      return;
    }

    Alert.alert('Login incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const handleLogin = () => {
    Keyboard.dismiss();
    signIn({email, password});
  };

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={loginStyles.formContainer}>
          {/* Logo */}
          <WhiteLogo />
          {/* Form View */}
          <View style={loginStyles.content}>
            {/* Input Email */}
            <InputComponent
              icon={<EmailIcon width={22} height={22} />}
              placeholder="Email"
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'email')}
              value={email}
              onSubmitEditing={handleLogin}
              autoCorrect={false}
              testID="email-input"
            />

            {/* Input Password */}
            <InputComponent
              placeholder="Password"
              placeholderTextColor="#828282"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={(value: string) => onChange(value, 'password')}
              value={password}
              onSubmitEditing={handleLogin}
              icon={<LockIcon width={22} height={22} />}
              testID="password-input"
            />

            {/* login button */}
            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                testID="login-button"
                onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>

            {/* Crear una nueva cuenta */}
            <Button
              testID="navigate-to-register"
              onPress={() => navigation.push('Register')}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
