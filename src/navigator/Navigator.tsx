import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
// import {SplashScreen} from '../screens/SplashScreen';
import {AuthContext} from '../context/AuthContext';
import {LoadingScreen} from '../screens/LoadingScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {PokemonDetailScreen} from '../screens/PokemonDetailScreen';

import BackButton from '../assets/Icon/Chevron-Left.svg';
import {HeaderRegister} from '../components/ui/HeaderRegister';
import {SearchInput} from '../components/SearchInput';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);
  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#f8f8f8'},
      }}>
      {status !== 'authenticated' ? (
        <>
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: true,
              headerTitle: () => <HeaderRegister />,
              headerStyle: {
                backgroundColor: '#111111',
                elevation: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
              },
              headerTitleAlign: 'center',
              headerTintColor: '#ffffff',
              headerBackImage: () => <BackButton />,
            }}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: true,
              headerTitle: () => <SearchInput style={{width: '88%'}} />,
              headerTitleAlign: 'center',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#111111',
                elevation: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
              },
            }}
          />
          <Stack.Screen
            name="Pokemon"
            component={PokemonDetailScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: '',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#111111',
                elevation: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: '#111111',
                elevation: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
              },
              headerTintColor: '#ffffff',
              headerBackImage: () => <BackButton />,
            }}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
