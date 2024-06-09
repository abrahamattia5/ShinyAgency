import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const StyledLink = styled(Link)
`
    padding: 15px;
    color:  ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary} ;`}
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