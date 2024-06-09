import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {StyledLink} from '../../utils/style/Atoms'

import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

 
function Header() 
{
    return (
        <nav>
            <Link to="/">
                <HomeLogo src={DarkLogo} />
            </Link>
            <StyledLink to="/">       Accueil</StyledLink>
            <StyledLink to="/survey/1" $isFullLink > Faire le test </StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
        </nav>
    )
}

export default Header