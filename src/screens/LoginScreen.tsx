/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
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
  const {signIn} = useContext(AuthContext);

  const navigation = useNavigation<mainScreenProp>();
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  function handleLogin() {
    Keyboard.dismiss();
    signIn({email: email, password: password});
  }

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
            />

            {/* login button */}
            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>

            {/* Crear una nueva cuenta */}
            <Button onPress={() => navigation.navigate('Home')} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
