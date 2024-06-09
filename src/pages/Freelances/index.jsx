import Card from "../../components/Card"
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'

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

function Freelances() 
{
    return (
      <div>
        <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
        
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name }
            />
          ))}
        </CardsContainer>
      </div>
    );
}

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

export default Freelances