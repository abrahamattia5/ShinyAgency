import Card from "../../components/Card"
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LinkStyle = styled(Link)`
  text-decoration: none;
`

function Freelances() 
{
  const { theme } = useTheme()
  
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)

  // "?" permet de s'assurer que data existe bien.
  // plus d'info sur cette notation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const freelancersList = data?.freelancersList

  const [favorites, setFavorites] = useState({})

  useEffect(() => 
  {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {}
    setFavorites(storedFavorites)
  }, [])

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites, [id]: !prevFavorites[id] }
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  if (error) 
  {
    return <span>Oups il y a eu un problème</span>
  }


  return (
    <div>
      <PageTitle theme={theme} >Trouvez votre prestataire</PageTitle>

      <PageSubtitle theme={theme} > Chez Shiny nous réunissons les meilleurs profils pour vous. </PageSubtitle>
      
      {
      isLoading ? 
      (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) 
      : 
      (
        <CardsContainer>
          {freelancersList.map((profile, index) => 
          (
            <LinkStyle key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
                isFavorite={!!favorites[profile.id]}
                onFavoriteToggle={() => handleFavoriteToggle(profile.id)}
              />
            </LinkStyle>
          ))}
        </CardsContainer>
      )}
    </div>
  );
}

export default Freelances

/**
const freelanceProfiles = 
[
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
      name: 'paul',
      jobTitle: 'graphiste',
      picture: DefaultPicture,
  },
  {
    name: 'Jean',
    jobTitle: 'Développeur Fullstack',
    picture: DefaultPicture,
},
]
 */