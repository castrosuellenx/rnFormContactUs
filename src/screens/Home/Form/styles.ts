import styled from 'styled-components/native';
import RFValue from '../../../utils/RFValue';

export const Container = styled.View`
  width: 95%;
  height: 65%;
  background-color: ${({theme}) => theme.colors.fullWhite};
  margin-vertical: ${RFValue(10)}px;
  align-self: center;
  border-radius: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.black};
  text-align: center;
  margin-top: ${RFValue(20)}px;
`;
