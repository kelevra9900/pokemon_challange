import React, {useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {profileTheme as styles} from '../theme/profileTheme';

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
