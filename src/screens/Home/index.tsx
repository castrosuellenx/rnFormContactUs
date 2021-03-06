import React from 'react';

import * as S from './styles';
import Header from '../../components/Header';
import Form from './Form';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <S.Scroll>
        <Form />
        <Contact />
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
