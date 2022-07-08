/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LockIcon from '../assets/Icon/Lock.svg';
import EmailIcon from '../assets/Icon/Email.svg';
import {WhiteLogo} from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {loginStyles} from '../theme/loginTheme';
// import {WhiteLogo} from '../components/WhiteLogo';

export const LoginScreen = () => {
  // const {signIn, errorMessage, removeError} = useContext(AuthContext);
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
            <View style={loginStyles.inputContainer}>
              <EmailIcon width={22} height={22} />
              <TextInput
                placeholder="Ingrese su email:"
                keyboardType="email-address"
                style={[
                  loginStyles.inputField,
                  Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                ]}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={loginStyles.inputContainer}>
              <LockIcon width={22} height={22} />
              <TextInput
                placeholder="******"
                secureTextEntry
                style={[
                  loginStyles.inputField,
                  Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                ]}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Boton login */}
            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
                <Text style={loginStyles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>

            {/* Crear una nueva cuenta */}
            <View style={loginStyles.newUserContainer}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={loginStyles.createUserText}>
                  Create an account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
