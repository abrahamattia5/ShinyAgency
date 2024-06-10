import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import styled from 'styled-components'
import colors from '../../utils/style/colors'


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
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

function Freelances() 
{
  const [isDataLoading, setDataLoading] = useState(false) //changé a avant le chargement des données et remise a False après
  const [error, setError] = useState(false) // capture de l'erreur 
  const [freelancersList, setFreelancesList] = useState([]) //liste des freelances vide

  //chargement des données
  useEffect(() =>
  {
      async function fetchFreelances() 
      {
          setDataLoading(true)

          try 
          {
            //requete fetch pour récupérer les données de l'API
            const response = await fetch(`http://localhost:8000/freelances`)

            //récupération des données de l'API en JSON dans la variable surveyData
            const { freelancersList } = await response.json()

            //mise à jour de l'état de la variable surveyData
            setFreelancesList(freelancersList)
          } 
          catch (err) 
          {
            console.log(err)
            setError(true)
          } 
          finally 
          {
            setDataLoading(false)
          }
      }
      //la fonction fetchFreelances est appelée par useEffect
      fetchFreelances()
  }, [])

  if (error) 
  {
    return <span>Oups il y a eu un problème</span>
  }


  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>

      <PageSubtitle> Chez Shiny nous réunissons les meilleurs profils pour vous. </PageSubtitle>
      
      <CardsContainer>
        {freelancersList.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.job}
            title={profile.name }
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
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