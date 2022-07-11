import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#111111',
    height: 600,
  },
  inputContainer: {
    backgroundColor: '#F3F1F3',
    borderRadius: 6,
    marginTop: 20,
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    fontSize: 20,
  },
  inputFieldIOS: {
    paddingBottom: 4,
    marginLeft: 6,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 48,
    marginTop: 20,
  },
  logo: {
    flex: 1,
  },
  contentInputs: {
    flex: 1,
  },
  button: {
    backgroundColor: '#2F80ED',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  createUserText: {
    fontSize: 16,
    color: '#2F80ED',
    textDecorationLine: 'underline',
  },
  newUserContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  backButton: {
    color: 'white',
    marginTop: 10,
  },
});
