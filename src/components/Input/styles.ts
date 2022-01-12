import styled from 'styled-components/native';
import RFValue from '../../utils/RFValue';

export const Container = styled.View`
  width: ${RFValue(335)}px;
  height: ${RFValue(75)}px;
  background-color: ${({theme}) => theme.colors.fullWhite};
  elevation: 5;
  align-self: center;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const MultilineContainer = styled.View`
  width: ${RFValue(335)}px;
  height: ${RFValue(100)}px;
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

export const WrapperBottomContent = styled.View`
  width: 100%;
  height: 65%;
`;

export const MultilineWrapperBottomContent = styled.View`
  width: 100%;
  height: 75%;
`;

export const WrapperInput = styled.View`
  width: 95%;
  height: 80%;
  align-self: center;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  border-bottom-width: ${RFValue(1)}px;
`;

export const MultilineWrapperInput = styled.View`
  width: 95%;
  height: 85%;
  align-self: center;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  border-bottom-width: ${RFValue(1)}px;
`;

export const WrapperPicker = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: ${RFValue(50)}px;
`;
