/**
 * @format
 */
import mockAsyncStorage from './__mocks__/@react-native-community/async-storage.js';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
