import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render} from '@testing-library/react-native';

import {Navigator} from '../src/navigator/Navigator';

describe('Testing react navigation', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>,
    );
  });
  it('Should contains inputs (emial and password)', () => {
    expect(wrapper.getByTestId('email-input')).toBeTruthy();
    expect(wrapper.getByTestId('password-input')).toBeTruthy();
  });
  it('page contains the login button', async () => {
    expect(wrapper.getByText('Log In')).toBeTruthy();
  });
  it('page contains the register button', async () => {
    expect(wrapper.getByText('Create an account')).toBeTruthy();
  });

  it('when the user submit login button, should appear an error', async () => {
    fireEvent.changeText(wrapper.getByPlaceholderText('Email'), 'rr@');
    fireEvent.changeText(wrapper.getByPlaceholderText('Password'), '123');
    fireEvent.press(wrapper.getByText('Log In'));
  });
});
