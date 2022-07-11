/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

type Props = {
  placeholder?: string;
  secureTextEntry?: boolean;
  icon?: React.ReactElement;
  onChangeText: (text: string) => void;
  value: string;
  error?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  testID?: string;
  onSubmitEditing?: () => void;
};

const Input = ({
  placeholder,
  error,
  icon,
  value,
  secureTextEntry,
  testID,
  onSubmitEditing,
  onFocus = () => {},
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{marginBottom: 16}}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.error
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        {/* <Icon
          name={iconName}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        /> */}
        {icon}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry}
          style={{flex: 1, color: COLORS.black}}
          value={value}
          testID={testID}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.error, fontSize: 12}}>
          {error}
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
