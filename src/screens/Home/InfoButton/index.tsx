import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export type Props = {
  icon: string;
  size: number;
  color: string;
  desc: string;
};

const InfoButton: React.FC<Props> = ({icon, size, color, desc}) => {
  return (
    <S.Container>
      <Icon name={icon} size={size} color={color} />
      <S.Desc>{desc}</S.Desc>
    </S.Container>
  );
};

export default InfoButton;
