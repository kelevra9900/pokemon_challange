import {StyleSheet} from 'react-native';
import COLORS from '../utils/colors';

export const profileTheme = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    alignItems: 'center',
    backgroundColor: COLORS.black,
    marginTop: 20,
  },
  avatar: {
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.grey,
    borderColor: '#4F4F4F',
    borderWidth: 1,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  signOutBtn: {
    marginTop: 40,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginHorizontal: 20,
  },
  email: {
    marginTop: 10,
    color: COLORS.greyLight,
    fontSize: 16,
    fontWeight: '400',
  },
  signOut: {
    color: COLORS.blue00,
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginRight: 3,
  },
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 45,
  },
});
