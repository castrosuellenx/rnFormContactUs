import React from 'react';

import * as S from './styles';
import Header from '../../components/Header';
import WrapperForm from './WrapperForm';
import WrapperContact from './WrapperContact';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <S.Container>
        <WrapperForm />
        <WrapperContact />
      </S.Container>
    </S.Container>
  );
};

export default Home;
