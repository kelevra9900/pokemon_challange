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
import {StackScreenProps} from '@react-navigation/stack';

import {WhiteLogo} from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {loginStyles} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
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
            <View style={loginStyles.inputContainer}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#828282"
                style={[
                  loginStyles.inputField,
                  Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                ]}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            {/* Input Email */}
            <View style={loginStyles.inputContainer}>
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
              <TextInput
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#828282"
                style={[
                  loginStyles.inputField,
                  Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                ]}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Input Confirm Password */}
            <View style={loginStyles.inputContainer}>
              <TextInput
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#828282"
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
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={() => navigation.replace('RegisterScreen')}>
                <Text style={loginStyles.buttonText}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
