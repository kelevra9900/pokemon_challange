import React, {useContext, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {useForm} from '../hooks/useForm';
import {AuthContext} from '../context/AuthContext';

import WhiteLogo from '../components/WhiteLogo';
import Input from '../components/ui/Input';
import {loginStyle as styles} from '../theme/loginTheme';

import LockIcon from '../assets/Icon/Lock.svg';
import EmailIcon from '../assets/Icon/Email.svg';

type mainScreenProp = StackNavigationProp<any, 'Main'>;

type ErrorProps = {
  error: string;
  email: string;
  password: string;
}
export const LoginScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<ErrorProps>({} as ErrorProps);
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

    Alert.alert('Try again', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const handleLogin = () => {
    setLoading(true);
    Keyboard.dismiss();
    signIn({email, password});
    setLoading(false);
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!email) {
      handleError('The email field is required', 'email');
      isValid = false;
    }
    if (!password) {
      handleError('The password field is required', 'password');
      isValid = false;
    }
    if (isValid) {
      handleLogin();
    }
  };

  const handleError = (error: any, input: any) => {
    setErrors((prevState: any) => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView testID="login-page" style={styles.container}>
      {/* White Logo */}
      <View style={styles.logo}>
        <WhiteLogo />
      </View>

      <View style={styles.form}>
        {/* Input Email */}
        <Input
          onChangeText={(value: string) => onChange(value, 'email')}
          onFocus={() => handleError(null, 'email')}
          placeholder="Email"
          icon={<EmailIcon />}
          error={errors.email}
          value={email}
          onSubmitEditing={handleLogin}
          testID="email-input"
        />

        {/* Input password */}
        <Input
          onChangeText={(value: string) => onChange(value, 'password')}
          onFocus={() => handleError(null, 'password')}
          placeholder="Password"
          icon={<LockIcon />}
          error={errors.password}
          value={password}
          onSubmitEditing={handleLogin}
          secureTextEntry={true}
          testID="password-input"
        />

        {/* Custon Button login */}
        <TouchableOpacity
          testID="login-button"
          style={styles.loginButton}
          disabled={loading}
          onPress={validate}>
          <Text style={styles.textLogin}>Log In</Text>
        </TouchableOpacity>

        {/* Create account button */}
        <TouchableOpacity
          style={styles.registerButton}
          testID="navigate-to-register"
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textRegister}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
