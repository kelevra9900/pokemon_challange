import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import {LoginScreen} from '../src/screens/LoginScreen';
import {AuthProvider} from '../src/context/AuthContext';

describe('Should render Login page', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('The login page must have a form with the following fields: email, password and a submit button', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <NavigationContainer>
        <AuthProvider>
          <LoginScreen />
        </AuthProvider>
      </NavigationContainer>,
    );
  });
  it('Should contains Logo image', () => {
    expect(wrapper.getByTestId('logo-image')).toBeTruthy();
  });
  it('Should contains inputs (emial and password)', () => {
    waitFor(() => {
      expect(wrapper.getByTestId('email-input')).toBeTruthy();
      expect(wrapper.getByTestId('password-input')).toBeTruthy();
    });
  });
  it('page contains the login button', async () => {
    waitFor(() => {
      expect(wrapper.getByText('Log In')).toBeTruthy();
    });
  });
  it('page contains the register button', async () => {
    waitFor(() => {
      expect(wrapper.getByText('Create an account')).toBeTruthy();
    });
  });
  it('display required messages as the format: "The [field name] is required"', () => {
    const {getByTestId} = wrapper;
    fireEvent.changeText(getByTestId('email-input'), '');
    fireEvent.changeText(getByTestId('password-input'), '');
    fireEvent.press(getByTestId('login-button'));
  });
});

describe.only('The Login page must be define register button and navigate to this page', () => {
  it('Clicking register button', () => {
    const push = jest.fn();
    const {getByTestId} = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('navigate-to-register'));
    waitFor(() => {
      expect(push).toHaveBeenCalled();
    });
  });
});
