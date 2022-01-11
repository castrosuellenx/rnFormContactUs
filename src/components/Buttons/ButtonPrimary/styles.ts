import styled from 'styled-components/native';
import RFValue from '../../../utils/RFValue';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondary};
  align-self: center;
  border-radius: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.fullWhite};
  padding-vertical: ${RFValue(8)}px;
  padding-horizontal: ${RFValue(20)}px;
  text-align: center;
`;
