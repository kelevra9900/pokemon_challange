import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
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

export const AuthContext = createContext({} as AuthContextProps);

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

type ServerError = { errorMessage: string };

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    // Chck if token is in storage
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
          error?.response?.data?.errors?.email[0] ||
          error?.response?.data?.message ||
          'The selected email is invalid',
      });
    }
  };

  const signUp = async ({
    name,
    email,
    password,
    password_confirmation,
  }: RegisterData) => {
    try {
      const {data} = await restApi.post<User>('/register', {
        name,
        email,
        password,
        password_confirmation,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.access_token,
          user: data.user,
        },
      });

      await AsyncStorage.setItem('token', data.access_token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      return { errorMessage: "Kuch to ghotala h" };
      // dispatch({
      //   type: 'addError',
      //   payload:
      //     error.response.data?.errors?.password[0] ||
      //     error.response.data?.errors?.password[1] ||
      //     error.response.data?.errors?.password[2] ||
      //     error.response.data?.errors?.email[0] ||
      //     'Revise la información',
      // });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
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
