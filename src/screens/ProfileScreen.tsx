import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogoutIcon from '../assets/Icon/Log-out.svg';
import {AuthContext} from '../context/AuthContext';
import {Background} from '../components/Background';
import COLORS from '../utils/colors';

interface Props extends StackScreenProps<any, 'PokemonScreen'> {}

export const ProfileScreen = ({navigation}: Props) => {
  const {user, logOut} = useContext(AuthContext);
  const fullName = user?.name.split(' ');
  const {top} = useSafeAreaInsets();
  const initials =
    fullName?.shift()?.charAt(0) || '' + fullName?.pop()?.charAt(0) || '';

  return (
    <>
      <Background />
      <View>
        {/* Backbutton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}>
          <Icon name="angle-left" size={45} color={COLORS.white} />
        </TouchableOpacity>
      </View>
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
    </>
  );
};

const styles = StyleSheet.create({
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
