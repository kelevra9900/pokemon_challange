import React from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import WhiteLogo from '../components/WhiteLogo';
import {Background} from '../components/Background';
import {loginStyles} from '../theme/loginTheme';
import {InputComponent} from '../components/ui/Input';
import {useForm} from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {name, email, password, confirmPassword, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
              onChangeText={(value: string) => onChange(value, 'email')}
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
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'email')}
              autoCorrect={false}
            />

            {/* Input Confirm Password */}
            <InputComponent
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#828282"
              onChangeText={(value: string) => onChange(value, 'email')}
              autoCorrect={false}
            />

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
