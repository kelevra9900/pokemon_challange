import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import {RegisterScreen} from '../src/screens/RegisterScreen';
import {AuthProvider} from '../src/context/AuthContext';

describe('Should render Login page', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <RegisterScreen />
      </NavigationContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('The Register page must have a form with the following fields: name, email, password, confirm password  and a submit button', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <NavigationContainer>
        <AuthProvider>
          <RegisterScreen />
        </AuthProvider>
      </NavigationContainer>,
    );
  });
  it('Should contains inputs (emial and password)', () => {
    waitFor(() => {
      expect(wrapper.getByTestId('name-register-input')).toBeTruthy();
      expect(wrapper.getByTestId('email-register-input')).toBeTruthy();
      expect(wrapper.getByTestId('password-register-input')).toBeTruthy();
      expect(wrapper.getByTestId('password_confirmation-input')).toBeTruthy();
      expect(wrapper.getByTestId('register-submit-button')).toBeTruthy();
    });
  });
  it('page contains the Create account button', async () => {
    waitFor(() => {
      expect(wrapper.getByText('Create account')).toBeTruthy();
    });
  });
  it('page contains the register button', async () => {
    waitFor(() => {
      expect(wrapper.getByText('Create account')).toBeTruthy();
    });
  });
  it('display required messages as the format: "The [field name] is required"', () => {
    const {getByTestId, getByText} = wrapper;
    act(() => {
      fireEvent.changeText(getByTestId('name-register-input'), '');
      fireEvent.changeText(getByTestId('email-register-input'), '');
      fireEvent.changeText(getByTestId('password-register-input'), '');
      fireEvent.changeText(
        getByTestId('password_confirmation-register-input'),
        '',
      );
      fireEvent.press(getByTestId('register-submit-button'));
    });
    waitFor(() => {
      expect(getByText('The name field is required')).toBeTruthy();
      expect(getByText('The email field is required')).toBeTruthy();
      expect(getByText('The password field is required')).toBeTruthy();
    });
  });
});
