import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';

import facebookIcon from '../../assets/icons/facebook.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

const ContactContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
  border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  img {
    width: 32px;
    height: 32px;
  }
`;

function Contact() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ContactContainer theme={theme}>
          <Title theme={theme}>Contactez-nous</Title>

          <Section>
            <SectionTitle theme={theme}>Adresse</SectionTitle>
            <Content theme={theme}>
              1234 Rue Fictive<br />
              75001 Paris<br />
              France
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>Email</SectionTitle>
            <Content theme={theme}>
              contact@agencefictive.com
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>Téléphone</SectionTitle>
            <Content theme={theme}>
              +33 1 23 45 67 89
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>Suivez-nous sur les réseaux sociaux</SectionTitle>
            <SocialMediaIcons>
              <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" />
              </SocialIcon>
            </SocialMediaIcons>
          </Section>
        </ContactContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Contact;
