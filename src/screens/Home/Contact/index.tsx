import React from 'react';
import {useTheme} from 'styled-components/native';

import * as S from './styles';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import InfoButton from '../InfoButton';

const Contact: React.FC = () => {
  const theme = useTheme();

  const facebookURL = 'https://facebook.com';
  const twitterURL = 'https://twitter.com';
  const instagramURL = 'https://instagram.com';
  const linkedinURL = 'https://linkedin.com';

  return (
    <S.Container>
      <S.Inner>
        <S.Title>Contact Information</S.Title>
        <S.Subtitle>
          Fill up the form and our Team will get back to you within 24 hours.
        </S.Subtitle>
      </S.Inner>

      <S.WrapperInfos>
        <S.WrapperInfoButton>
          <InfoButton
            icon="phone"
            size={20}
            color={theme.colors.secondary}
            desc="+0123 4567 8910"
          />
          <InfoButton
            icon="place"
            size={20}
            color={theme.colors.secondary}
            desc="hello@flowbase.com"
          />
          <InfoButton
            icon="email"
            size={20}
            color={theme.colors.secondary}
            desc="102 Street 2714 Don"
          />
        </S.WrapperInfoButton>

        <S.WrapperIcons>
          <S.RowDirection>
            <S.IconRight>
              <ButtonSecondary
                icon="facebook-f"
                size={20}
                color={theme.colors.fullWhite}
                url={facebookURL}
              />
            </S.IconRight>

            <S.IconBottom>
              <ButtonSecondary
                icon="twitter"
                size={20}
                color={theme.colors.fullWhite}
                url={twitterURL}
              />
            </S.IconBottom>
          </S.RowDirection>

          <S.RowDirection>
            <S.IconRight>
              <ButtonSecondary
                icon="instagram"
                size={20}
                color={theme.colors.fullWhite}
                url={instagramURL}
              />
            </S.IconRight>

            <ButtonSecondary
              icon="linkedin-in"
              size={20}
              color={theme.colors.fullWhite}
              url={linkedinURL}
            />
          </S.RowDirection>
        </S.WrapperIcons>
      </S.WrapperInfos>
    </S.Container>
  );
};

export default Contact;
