/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// const mockedNavigate = jest.fn();

// jest.mock('@react-navigation/native', () => {
//   const actualNav = jest.requireActual('@react-navigation/native');
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: mockedNavigate,
//     }),
//   };
// });

describe('When Login render', () => {
  it('renders correctly', () => {
    renderer.create(<App />).toJSON();
    expect(renderer.create(<App />)).toMatchSnapshot();
  });
});
