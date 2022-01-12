import styled from 'styled-components/native';
// import RFValue from '../../utils/RFValue';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
