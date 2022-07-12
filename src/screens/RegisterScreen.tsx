import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  SafeAreaView,
} from 'react-native';

import {useForm} from '../hooks/useForm';
import {registerTheme as styles} from '../theme/registerTheme';
import {AuthContext} from '../context/AuthContext';
import Input from '../components/ui/Input';

export interface ErrorsProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterScreen = () => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const [errors, setErrors] = React.useState<ErrorsProps>({} as ErrorsProps);
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

  const handleError = (error: string | null, input: string) => {
    setErrors((prevState: ErrorsProps) => ({...prevState, [input]: error}));
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
          testID="name-register-input"
        />
        {/* Input Email */}
        <Input
          onChangeText={(value: string) => onChange(value, 'email')}
          onFocus={() => handleError(null, 'email')}
          placeholder="Email"
          error={errors.email}
          value={email}
          onSubmitEditing={validate}
          testID="email-register-input"
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
          testID="password-register-input"
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
          testID="password_confirmation-register-input"
        />

        {/* Custon Button login */}
        <TouchableOpacity
          style={styles.registerButton}
          disabled={loading}
          testID="register-submit-button"
          onPress={validate}>
          <Text style={styles.textLogin}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
