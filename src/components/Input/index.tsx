import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

export type Props = {
  title: string;
} & TextInputProps;

const Input: React.FC<Props> = ({title, multiline, ...rest}) => {
  return (
    <>
      <S.Container multiline={multiline}>
        <S.WrapperTitle>
          <S.Title>{title}</S.Title>
        </S.WrapperTitle>

        <S.InputField multiline={multiline} {...rest} />
      </S.Container>
    </>
  );
};

export default Input;
