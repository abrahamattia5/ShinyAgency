import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';

const TermsContainer = styled.div`
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

function ConditionsUtilisation() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <TermsContainer theme={theme}>
          <Title theme={theme}>Conditions Générales d'Utilisation</Title>

          <Section>
            <SectionTitle theme={theme}>1. Introduction</SectionTitle>
            <Content theme={theme}>
              Les présentes conditions générales d'utilisation (ci-après "CGU") ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs (ci-après "Utilisateur" ou "Vous") peuvent accéder et utiliser notre site web.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>2. Acceptation des CGU</SectionTitle>
            <Content theme={theme}>
              En accédant et en utilisant notre site web, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces CGU, vous devez cesser toute utilisation de notre site web.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>3. Utilisation du site</SectionTitle>
            <Content theme={theme}>
              Vous vous engagez à utiliser notre site web conformément aux lois et règlements en vigueur et à ne pas porter atteinte aux droits de tiers. Vous vous interdisez notamment de :
              <ul>
                <li>Publier des contenus illicites, diffamatoires, ou portant atteinte à la vie privée d'autrui;</li>
                <li>Usurper l'identité d'une autre personne;</li>
                <li>Utiliser notre site à des fins commerciales sans notre autorisation préalable.</li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>4. Propriété intellectuelle</SectionTitle>
            <Content theme={theme}>
              Tous les contenus présents sur notre site web, y compris les textes, images, graphiques, logos, icônes, et logiciels, sont la propriété exclusive de notre société ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces contenus sans notre autorisation préalable est strictement interdite.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>5. Limitation de responsabilité</SectionTitle>
            <Content theme={theme}>
              Nous nous efforçons de fournir des informations exactes et à jour sur notre site web. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité des informations publiées. En conséquence, nous déclinons toute responsabilité en cas d'erreur ou d'omission dans ces informations.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>6. Modifications des CGU</SectionTitle>
            <Content theme={theme}>
              Nous nous réservons le droit de modifier les présentes CGU à tout moment. Nous vous informerons des changements en publiant la nouvelle version des CGU sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour être informé des éventuelles modifications.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>7. Contact</SectionTitle>
            <Content theme={theme}>
              Si vous avez des questions concernant les présentes CGU, vous pouvez nous contacter à l'adresse suivante : [Adresse de la Société].
            </Content>
          </Section>
        </TermsContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default ConditionsUtilisation;
