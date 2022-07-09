/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import MockedAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
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

describe('When Login render', () => {
  beforeEach(() => {
    jest.mock(
      '@react-native-community/async-storage',
      () => MockedAsyncStorage,
    );
  });
  it('renders correctly', () => {
    renderer.create(<App />).toJSON();
    expect(renderer.create(<App />)).toMatchSnapshot();
  });
});
