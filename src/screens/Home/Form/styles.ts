import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 95%;
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
  margin-vertical: ${RFValue(20)}px;
`;

export const Scroll = styled.ScrollView``;

/* export const InputField = styled.TextInput`
  width: 100%;
  height: 100%;
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.black};
  text-align-vertical: bottom;
`; */

export const ErrorText = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.red};
  text-align: center;
  margin-top: ${RFValue(-10)}px;
  margin-bottom: ${RFValue(20)}px;
`;
