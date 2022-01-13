import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(335)}px;
  max-height: ${RFValue(120)}px;
  background-color: ${({theme}) => theme.colors.fullWhite};
  elevation: 5;
  align-self: center;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const WrapperTopContent = styled.View``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
`;
