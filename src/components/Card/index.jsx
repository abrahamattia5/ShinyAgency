import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  display: flex;
  align-items: center;
  
`

const CardTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  display: flex;
  align-items: center;
`

const CardStar = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;

  cursor: pointer;
  margin-left: 20px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.3); 
  }
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`
const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px;
background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
border-radius: 30px;
width: 300px;
height: 300px;
transition: 200ms;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px #e2e3e9;
}
`


function Card({ id, label, title, picture, isFavorite, onFavoriteToggle }) 
{
  const { theme } = useTheme()
  
  const handleStarClick = (event) => 
  {
    event.stopPropagation()
    event.preventDefault()
    onFavoriteToggle(id)
  }

  const star = isFavorite ? '⭐️' : '☆'

    return (
      <CardWrapper theme={theme}  >
        <CardLabel theme={theme} >{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme} >
          {title} 

          <CardStar 
            theme={theme} 
            onClick={handleStarClick} 
          > 
            {star} 
          </CardStar>

        </CardTitle>
      </CardWrapper>
    )
}

Card.propTypes = 
{
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
  

 
export default Card