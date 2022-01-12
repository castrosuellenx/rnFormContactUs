import React from 'react';

import * as S from './styles';

export type Props = {
  title: string;
  onPress(): void;
};

const ButtonPrimary: React.FC<Props> = ({title, onPress, ...rest}) => {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonPrimary;
