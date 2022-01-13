import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  margin-vertical: ${RFValue(4)}px;
`;

export const Desc = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.fullWhite};
  margin-left: ${RFValue(5)}px;
`;
