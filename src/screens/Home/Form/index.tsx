import React from 'react';

import * as S from './styles';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

const Form: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Any question or remarks? Just write us a message!</S.Title>

      <ButtonPrimary title="SEND MESSAGE" />
    </S.Container>
  );
};

export default Form;
