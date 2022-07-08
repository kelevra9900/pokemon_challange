/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {LoginScreen} from '../src/screens/LoginScreen';
import {NativeModules} from 'react-native';

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.PlatformConstants = {
  forceTouchAvailable: false,
};

NativeModules.UIManager = {
  RCTView: () => ({
    directEventTypes: {},
  }),
};

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('When Login render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
