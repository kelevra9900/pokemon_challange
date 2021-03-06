import {StyleSheet} from 'react-native';
import COLORS from '../utils/colors';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  logo: {
    flex: 1,
    marginTop: 20,
  },
  form: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginHorizontal: 16,
  },
  loginButton: {
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
  registerButton: {
    marginHorizontal: 16,
    color: 'red',
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.blue00,
    textDecorationLine: 'underline',
  },
});
