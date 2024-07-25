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

const NightModeButton = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.secondary};
  padding: 10px 20px;
  cursor: pointer;
  color: ${colors.secondary};
`

const LegalLink = styled(Link)`
  color: ${({ theme }) => theme === 'light' ? colors.dark : 'white'};
  text-decoration: none;
  font-size: 14px;

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
      <p>Retrouvez-nous sur  :</p>
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
      <Column>
        <NightModeButton onClick={toggleTheme}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
      </Column>

      {/* Third Column: Legal Link */}
      <Column>
        <LegalLink theme={theme} to="/conditionsLegales">
          Conditions légales
        </LegalLink>
      </Column>
    </FooterContainer>
  )
}

export default Footer