import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {StyledLink} from '../../utils/style/Atoms'

import { useTheme } from '../../utils/hooks'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
 
function Header() 
{
    const { theme } = useTheme()

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>

            <div>
                <StyledLink $theme={theme} to="/"> Acceuil</StyledLink>
                <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
                <StyledLink $theme={theme} to="/contact">Contact</StyledLink>
                <StyledLink to="/survey/1" $isFullLink > Faire le test </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header