import {StyleSheet} from 'react-native';
import COLORS from '../utils/colors';

export const registerTheme = StyleSheet.create({
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
