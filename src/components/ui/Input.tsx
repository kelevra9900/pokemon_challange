import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

type Props = {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  icon?: React.ReactElement;
  onChangeText?: any;
  onSubmitEditing?: any;
  value: string;
  styles?: any;
};
export const InputComponent = (props: Props) => {
  return (
    <View style={styles.container} {...props.styles}>
      {props.icon}
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
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
  input: {
    color: '#000',
    marginLeft: 5,
  },
});
