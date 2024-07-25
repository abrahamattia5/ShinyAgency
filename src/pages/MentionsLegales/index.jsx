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

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

function MentionsLegales() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MentionsContainer theme={theme}>
          <Title>Mentions Légales</Title>
          <Content>
            Voici le texte des mentions légales...
          </Content>
        </MentionsContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default MentionsLegales;
