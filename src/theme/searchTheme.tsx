import {StyleSheet} from 'react-native';
import COLORS from '../utils/colors';

export const searchTheme = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  cancel: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 10,
  },
  searchContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  searchInput: {
    backgroundColor: COLORS.white,
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 10,
    color: COLORS.black,
    marginTop: 10,
  },
  cancelContent: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
