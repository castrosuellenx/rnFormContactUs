import React from 'react';

import * as S from './styles';

export type Props = {
  title: string;
};

const ButtonPrimary: React.FC<Props> = ({title, ...rest}) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonPrimary;
