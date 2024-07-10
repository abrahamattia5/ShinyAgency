/*
yarn add msw --dev

configuration d'un serveur d'interception des appel API afin de 
pouvoir fournir les données de retour que l'on veut 
a la place de celles de l'API et ainsi tester le bon fonctionnement de l'appel API

Les données simulées sont appelées "mocks" = simulacres
*/

import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'

const freelancersMockedData = [
    {
      name: 'Harry Potter',
      job: 'Magicien frontend',
      picture: '',
    },
    {
      name: 'Hermione Granger',
      job: 'Magicienne fullstack',
      picture: '',
    },
  ]
 
const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => 
    {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        //ctx = context = contexte de la réponse que l'on va retourner à l'appelant de l'API (ici notre composant Freelances) 
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)
 
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

