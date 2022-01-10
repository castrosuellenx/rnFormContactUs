import styled from 'styled-components/native';
import RFValue from '../../../utils/RFValue';

export const Container = styled.View`
  width: 95%;
  height: 35%;
  background-color: ${({theme}) => theme.colors.fullWhite};
  align-self: center;
  border-radius: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
`;
