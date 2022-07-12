import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

type Props = {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  icon?: React.ReactElement;
  onChangeText?: (text: string) => void;
  onFocus?:any;
  value: string;
  testID?: string;
  error?: string;
  onSubmitEditing?: any;
};

const Input = (props: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{marginBottom: 16}}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: props.error
              ? COLORS.error
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        {/* Icon input*/}
        {props.icon}

        {/* Input */}
        <TextInput
          {...props}
          autoCorrect={false}
          onFocus={() => {
            setIsFocused(true);
            props.onFocus();
          }}
          placeholderTextColor={COLORS.placeholder}
          onBlur={() => setIsFocused(false)}
          style={{flex: 1, color: COLORS.black}}
          onSubmitEditing={props.onSubmitEditing}
        />
      </View>
      {props.error && (
        <Text style={{marginTop: 7, color: COLORS.error, fontSize: 12}}>
          {props.error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    height: 44,
    borderRadius: 6,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});

export default Input;
