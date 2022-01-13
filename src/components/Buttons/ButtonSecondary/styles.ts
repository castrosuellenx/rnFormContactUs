import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(25)}px;
  align-items: center;
  justify-content: center;
`;
