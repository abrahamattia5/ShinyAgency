import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';

const PolicyContainer = styled.div`
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

function PolitiqueDeConfidentialite() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <PolicyContainer theme={theme}>
          <Title theme={theme}>Politique de Confidentialité</Title>

          <Section>
            <SectionTitle theme={theme}>1. Introduction</SectionTitle>
            <Content theme={theme}>
              Nous accordons une grande importance à la protection de vos données personnelles et à votre vie privée.
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>2. Collecte des informations</SectionTitle>
            <Content theme={theme}>
              Nous collectons différentes informations lorsque vous utilisez notre site, telles que votre nom, adresse e-mail, numéro de téléphone,
              adresse IP, ainsi que des informations sur votre utilisation de notre site web.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>3. Utilisation des informations</SectionTitle>
            <Content theme={theme}>
              Les informations collectées sont utilisées pour fournir et améliorer nos services, répondre à vos demandes,
              personnaliser votre expérience sur notre site, et vous envoyer des informations et des offres promotionnelles si vous avez consenti à recevoir de telles communications.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>4. Partage des informations</SectionTitle>
            <Content theme={theme}>
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers sans votre consentement,
              sauf dans les cas nécessaires pour fournir nos services, se conformer à la loi, ou protéger nos droits ou la sécurité.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>5. Sécurité des informations</SectionTitle>
            <Content theme={theme}>
              Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre l'accès, la modification,
              la divulgation ou la destruction non autorisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>6. Vos droits</SectionTitle>
            <Content theme={theme}>
              Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles,
              ainsi que du droit de vous opposer ou de limiter le traitement de vos données. Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : [Adresse de la Société].
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>7. Modifications de la politique de confidentialité</SectionTitle>
            <Content theme={theme}>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Nous vous informerons des changements en publiant la nouvelle politique sur notre site web.
              Nous vous encourageons à consulter cette page régulièrement pour être informé des éventuelles modifications.
            </Content>
          </Section>
        </PolicyContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default PolitiqueDeConfidentialite;
