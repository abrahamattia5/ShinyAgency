import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { Link } from 'react-router-dom'

import facebookIcon from '../../assets/icons/facebook.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import whatsappIcon from '../../assets/icons/whatsapp.png'


const FooterContainer = styled.footer
`
  margin: 50px 0px 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 30px 20px;
  background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => theme === 'light' ? colors.dark : 'white'};
`

const Column = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SocialsTitle = styled.h3
`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`

const SocialMediaIcons = styled.div
`
  display: flex;
  gap: 10px;
`

const SocialIcon = styled.a`
  color: ${({ theme }) => theme === 'light' ? colors.dark : 'white'};
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
  }
`
const NightModeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const NightModeTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.secondary};
  padding: 10px 20px;
  cursor: pointer;
  color: ${colors.secondary};
`

const LegalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const LegalTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`

const LegalLink = styled(Link)`
  color: ${({ theme }) => theme === 'light' ? colors.dark : 'white'};
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`

// Footer component
function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <FooterContainer theme={theme}>
      {
      // First Column: Social Media Icons
      // href sert à indiquer l'adresse du lien, target="_blank" ouvre le lien dans un nouvel onglet, rel="noopener noreferrer" est une sécurité pour éviter les attaques de type "phishing"
      }
      <Column>
        <SocialsTitle>Suivez-nous sur : </SocialsTitle> 

        <SocialMediaIcons> 
            
          <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" width="32" height="32" />
            </SocialIcon>
            
            <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" width="32" height="32" />
            </SocialIcon>

            <SocialIcon href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" width="32" height="32" />
            </SocialIcon>

        </SocialMediaIcons>
      </Column>


      {/* Second Column: Theme Toggle Button */}
      <NightModeColumn>

        <NightModeTitle>
          {theme === 'light' ? 'Passez au thème sombre' : 'Passez au thème clair'}
        </NightModeTitle>

        <NightModeButton onClick={toggleTheme}>
          {theme ==='light' ? 'Activer le mode sombre 🌙' : 'Activer le mode clair ☀️'}
        </NightModeButton>
      </NightModeColumn>

      {/* Third Column: Legal Links */}
      <LegalColumn>

        <LegalTitle>Informations légales</LegalTitle>

        <LegalLink theme={theme} to="/mentions-legales">
          Mentions légales
        </LegalLink>

        <LegalLink theme={theme} to="/politique-de-confidentialite">
          Politique de confidentialité
        </LegalLink>

        <LegalLink theme={theme} to="/conditions-utilisation">
          Conditions Générales d'Utilisation
        </LegalLink>

      </LegalColumn>

    </FooterContainer>
  )
}

export default Footer