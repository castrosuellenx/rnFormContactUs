import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.secondary};
  align-self: center;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.fullWhite};
  padding-vertical: ${RFValue(15)}px;
  padding-horizontal: ${RFValue(40)}px;
  text-align: center;
`;
