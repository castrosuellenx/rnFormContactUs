import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import * as S from './styles';

export type Props = {
  title: string;
  select?: boolean;
  optionOne?: string;
  optionTwo?: string;
  optionThree?: string;
  optionFour?: string;
  multiline?: boolean;
  onPress?: (value: any) => void;
};

const Input: React.FC<Props> = ({
  title,
  select = false,
  optionOne = '',
  optionTwo = '',
  optionThree = '',
  optionFour = '',
  multiline = false,
  onPress = value => {},
  children,
}) => {
  return (
    <>
      {!select && !multiline && (
        <S.Container>
          <S.WrapperTopContent>
            <S.Title>{title}</S.Title>
          </S.WrapperTopContent>

          <S.WrapperBottomContent>
            <S.WrapperInput>{children}</S.WrapperInput>
          </S.WrapperBottomContent>
        </S.Container>
      )}

      {select && (
        <S.Container>
          <S.WrapperTopContent>
            <S.Title>{title}</S.Title>
          </S.WrapperTopContent>

          <RNPickerSelect
            onValueChange={value => {
              console.log(value);
              onPress(value);
            }}
            useNativeAndroidPickerStyle={false}
            style={customPickerStyles}
            placeholder={{label: 'Tap to choose...', value: null}}
            items={[
              {label: `${optionOne}`, value: `${optionOne}`},
              {label: `${optionTwo}`, value: `${optionTwo}`},
              {label: `${optionThree}`, value: `${optionThree}`},
              {label: `${optionFour}`, value: `${optionFour}`},
            ]}
          />
        </S.Container>
      )}

      {!select && multiline && (
        <S.MultilineContainer>
          <S.WrapperTopContent>
            <S.Title>{title}</S.Title>
          </S.WrapperTopContent>

          <S.MultilineWrapperBottomContent>
            <S.MultilineWrapperInput>{children}</S.MultilineWrapperInput>
          </S.MultilineWrapperBottomContent>
        </S.MultilineContainer>
      )}
    </>
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

export default Input;
