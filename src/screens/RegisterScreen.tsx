/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {useForm} from '../hooks/useForm';
import {AuthContext} from '../context/AuthContext';
import Input from '../components/ui/Input';
import COLORS from '../utils/colors';

export const RegisterScreen = () => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = useState(false);

  const {name, email, password, password_confirmation, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (errorMessage?.length === 0) {
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
    setLoading(true);
    Keyboard.dismiss();
    signUp({
      name,
      email,
      password,
      password_confirmation,
    });
    setLoading(false);
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!name) {
      handleError('The name field is required', 'name');
      isValid = false;
    }
    if (!email) {
      handleError('The email field is required', 'email');
      isValid = false;
    }
    if (!password) {
      handleError('The password field is required', 'password');
      isValid = false;
    }
    if (!password_confirmation) {
      handleError('The password field is required', 'password_confirmation');
      isValid = false;
    }
    if (password !== password_confirmation) {
      handleError('Passwords do not match', 'password_confirmation');
      isValid = false;
    }
    if (isValid) {
      onRegister();
    }
  };

  const handleError = (error: any, input: any) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView testID="login-page" style={styles.container}>
      <View style={styles.form}>
        {/* Input Name */}
        <Input
          onChangeText={(value: string) => onChange(value, 'name')}
          onFocus={() => handleError(null, 'name')}
          placeholder="Name"
          error={errors.name}
          value={name}
          onSubmitEditing={validate}
        />
        {/* Input Email */}
        <Input
          onChangeText={(value: string) => onChange(value, 'email')}
          onFocus={() => handleError(null, 'email')}
          placeholder="Email"
          error={errors.email}
          value={email}
          onSubmitEditing={validate}
        />

        {/* Input password */}
        <Input
          onChangeText={(value: string) => onChange(value, 'password')}
          onFocus={() => handleError(null, 'password')}
          placeholder="Password"
          error={errors.password}
          value={password}
          onSubmitEditing={validate}
          secureTextEntry={true}
          testID="password-input"
        />

        {/* Input Confirm Password */}
        <Input
          onChangeText={(value: string) =>
            onChange(value, 'password_confirmation')
          }
          onFocus={() => handleError(null, 'password_confirmation')}
          placeholder="Confirm Password"
          error={errors.password_confirmation}
          value={password_confirmation}
          onSubmitEditing={validate}
          secureTextEntry={true}
          testID="password_confirmation-input"
        />

        {/* Custon Button login */}
        <TouchableOpacity
          style={styles.registerButton}
          disabled={loading}
          onPress={validate}>
          <Text style={styles.textLogin}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  form: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginHorizontal: 16,
    marginTop: 49,
  },
  registerButton: {
    marginVertical: 16,
    backgroundColor: COLORS.blue00,
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.blue00,
    textDecorationLine: 'underline',
  },
});
