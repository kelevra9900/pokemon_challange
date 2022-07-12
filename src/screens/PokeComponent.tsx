import { StyleSheet } from "react-native";

export const themePokeComponent = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 7,
    },
    weightHeight: {
      marginTop: 50,
      height: 56,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    contentEvo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal: 20,
      borderRadius: 8,
      height: 130,
      backgroundColor: 'rgba(44, 44, 44, 0.5)',
      borderColor: '#2c2c2c',
      borderWidth: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      marginTop: 20,
    },
    regularText: {
      fontSize: 16,
      color: 'white',
      fontWeight: '400',
    },
    subtitle: {
      fontSize: 12,
      color: '#828282',
      textAlign: 'center',
    },
    basicSprite: {
      width: 100,
      height: 65,
    },
    evoName: {
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'center',
      color: 'white',
    },
  });
  