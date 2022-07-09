import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import restApi from '../api';

import {User, RegisterData, LoginData, UserClass} from '../interfaces';
import {authReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: UserClass | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    // No token, no autenticado
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    if (!token && !user) {
      return dispatch({type: 'notAuthenticated'});
    }
    // Hay token
    dispatch({
      type: 'signUp',
      payload: {
        token: token!,
        user: JSON.parse(user!) as UserClass,
      },
    });
  };

  const signIn = async ({email, password}: LoginData) => {
    try {
      const {data} = await restApi.post<User>('/login', {
        email,
        password,
      });
      console.log('signIn', data);
      dispatch({
        type: 'signUp',
        payload: {
          token: data.access_token,
          user: data.user,
        },
      });
      await AsyncStorage.setItem('token', data.access_token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload:
          error.response.data.errors.email[0] ||
          'The selected email is invalid',
      });
    }
  };

  const signUp = async ({name, email, password}: RegisterData) => {
    console.log('signUp', name, email, password);
    // try {
    //         const { data } = await cafeApi.post<LoginResponse>('/usuarios', { correo, password, nombre } );
    //   });
    //   dispatch({
    //     type: 'signUp',
    //     payload: {
    //       token: data.token,
    //       user: data.usuario,,
    //     },,
    //   });
    //   await AsyncStorage.setItem('token', data.token);
    // } catch (error) {
    //   dispatch({
    //     type: 'addError',
    //     payload: error.response.data.errors[0].msg || 'Revise la información',,
    //   });
    // }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
