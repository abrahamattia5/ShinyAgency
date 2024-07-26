import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';

const MentionsContainer = styled.div`
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

function MentionsLegales() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MentionsContainer theme={theme}>
          <Title theme={theme}>Mentions Légales</Title>

          <Section>
            <SectionTitle theme={theme}>1. Éditeur du site</SectionTitle>
            <Content theme={theme}>
              Le site [Nom de l'Agence] est édité par [Nom de la Société], [Forme juridique], au capital de [Montant] euros,
              immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [Numéro RCS], dont le siège social est situé
              au [Adresse].
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>2. Directeur de la publication</SectionTitle>
            <Content theme={theme}>
              Le directeur de la publication est [Nom du Directeur].
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>3. Hébergeur du site</SectionTitle>
            <Content theme={theme}>
              Le site est hébergé par [Nom de l'Hébergeur], dont le siège social est situé au [Adresse de l'Hébergeur].
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>4. Propriété intellectuelle</SectionTitle>
            <Content theme={theme}>
              L'ensemble du contenu du site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos,
              gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de [Nom de la Société], à l'exception des marques, logos ou contenus
              appartenant à d'autres sociétés partenaires ou auteurs.
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>5. Données personnelles</SectionTitle>
            <Content theme={theme}>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression
              des données qui vous concernent. Vous pouvez exercer ce droit en envoyant un courrier à l'adresse suivante : [Adresse de la Société].
            </Content>
          </Section>

          <Section>
            <SectionTitle theme={theme}>6. Cookies</SectionTitle>
            <Content theme={theme}>
              Lors de la consultation de notre site, des cookies peuvent être déposés sur votre ordinateur, votre mobile ou votre tablette.
              Les cookies sont de petits fichiers texte déposés et stockés sur votre terminal, qui permettent de conserver des données utilisateur afin de faciliter
              la navigation et de permettre certaines fonctionnalités. Vous avez la possibilité de désactiver les cookies en vous rendant dans les options de votre navigateur.
            </Content>
          </Section>
        </MentionsContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default MentionsLegales;
