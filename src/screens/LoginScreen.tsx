/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
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

type mainScreenProp = StackNavigationProp<any, 'Main'>;

export const LoginScreen = () => {
  // const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const navigation = useNavigation<mainScreenProp>();

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
            {/* Input Email */}
            <View style={loginStyles.inputContainer}>
              <EmailIcon width={22} height={22} />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#828282"
                style={[
                  loginStyles.inputField,
                  Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                ]}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Input Password */}
            <View style={loginStyles.inputContainer}>
              <LockIcon width={22} height={22} />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#828282"
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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Register')}>
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
