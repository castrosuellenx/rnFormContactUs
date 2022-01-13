import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native';

type Props = {
  multiline?: boolean;
};

export const Container = styled.View<Props>`
  width: ${RFValue(335)}px;
  height: ${props => (props.multiline ? RFValue(120) : RFValue(75))}px;
  background-color: ${({theme}) => theme.colors.fullWhite};
  elevation: 5;
  align-self: center;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
`;

export const InputField = styled(TextInput)<Props>`
  width: 92%;
  height: ${props => (props.multiline ? 68 : 55)}%;
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.black};
  border-bottom-color: ${({theme}) => theme.colors.gray};
  border-bottom-width: ${RFValue(1)}px;
  text-align-vertical: bottom;
  align-self: center;
`;
