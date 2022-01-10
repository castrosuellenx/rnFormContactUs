import styled from 'styled-components/native';
import RFValue from '../../../utils/RFValue';

export const Container = styled.View`
  width: 95%;
  height: 60%;
  background-color: ${({theme}) => theme.colors.fullWhite};
  margin-vertical: ${RFValue(10)}px;
  align-self: center;
  border-radius: ${RFValue(20)}px;
`;
