import styled from 'styled-components/native';
import RFValue from '../../../utils/RFValue';

export const Container = styled.View`
  width: 95%;
  height: 30%;
  background-color: ${({theme}) => theme.colors.primary};
  align-self: center;
  border-radius: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
  justify-content: space-evenly;
`;

export const Inner = styled.View``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.fullWhite};
  text-align: center;
  margin-bottom: ${RFValue(5)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.light};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.lightWhite};
  text-align: center;
  padding-horizontal: ${RFValue(20)}px;
`;

export const IconRight = styled.View`
  margin-right: ${RFValue(10)}px;
`;

export const IconBottom = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const WrapperIcons = styled.View``;

export const WrapperInfoButton = styled.View`
  margin-right: ${RFValue(50)}px;
`;

export const WrapperInfos = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const RowDirection = styled.View`
  flex-direction: row;
`;
