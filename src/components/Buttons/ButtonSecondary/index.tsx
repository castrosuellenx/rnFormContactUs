import React, {useCallback} from 'react';
import {Alert, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as S from './styles';

export type Props = {
  icon: string;
  size: number;
  color: string;
  url: string;
};

const ButtonSecondary: React.FC<Props> = ({
  icon,
  size,
  color,
  url,
  ...rest
}) => {
  const openSocial = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <S.Container onPress={openSocial}>
      <Icon name={icon} size={size} color={color} />
    </S.Container>
  );
};

export default ButtonSecondary;
