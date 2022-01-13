import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import * as S from './styles';

type Option = {
  value: string;
  label: string;
};

export type Props = {
  title: string;
  onPress?: (value: any) => void;
  options?: Option[];
};

const Picker: React.FC<Props> = ({
  title,
  onPress = value => {},
  options = [],
}) => {
  return (
    <S.Container>
      <S.WrapperTopContent>
        <S.Title>{title}</S.Title>
      </S.WrapperTopContent>

      <RNPickerSelect
        onValueChange={value => {
          onPress(value);
        }}
        useNativeAndroidPickerStyle={false}
        style={customPickerStyles}
        placeholder={{label: 'Tap to choose...', value: null}}
        items={options}
      />
    </S.Container>
  );
};

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: '#5E5F8B',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#5E5F8B',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Picker;
