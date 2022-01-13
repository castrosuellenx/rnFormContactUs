import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  border-bottom-left-radius: ${RFValue(20)}px;
  border-bottom-right-radius: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.primary};

  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;

  elevation: 10;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fontFamily.medium}
  color: ${({theme}) => theme.colors.fullWhite};
  padding-vertical: ${RFValue(15)}px;
  text-align: center;
`;
