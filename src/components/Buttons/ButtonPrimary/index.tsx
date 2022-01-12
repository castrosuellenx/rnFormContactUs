import React from 'react';

import * as S from './styles';

export type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const ButtonPrimary: React.FC<Props> = ({
  title,
  onPress,
  disabled = false,
  ...rest
}) => {
  return (
    <S.Container onPress={onPress} disabled={disabled} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonPrimary;
