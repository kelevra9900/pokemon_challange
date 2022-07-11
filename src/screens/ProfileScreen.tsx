import React, {useContext} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import LogoutIcon from '../assets/Icon/Log-out.svg';
import {AuthContext} from '../context/AuthContext';
import COLORS from '../utils/colors';

export const ProfileScreen = () => {
  const {user, logOut} = useContext(AuthContext);
  const fullName = user?.name.split(' ');
  const initials =
    fullName?.shift()?.charAt(0) || '' + fullName?.pop()?.charAt(0) || '';

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <Avatar.Text
          size={100}
          label={initials}
          color={COLORS.white}
          style={styles.avatar}
        />
        <Text style={styles.text}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>

        <TouchableOpacity onPress={() => logOut()} style={styles.signOutBtn}>
          <Text style={styles.signOut}>Sign Out</Text>
          <LogoutIcon height={19} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
