import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

function Results() 
{
  const { answers } = useContext(SurveyContext)
  console.log(answers)

    return (
      <div>
        <h1>Résultats</h1>
        <p>Voici les réponses que vous avez données :</p>
        <ul>
          {Object.keys(answers).map((questionNumber) => (
            <li key={questionNumber}>
              Question {questionNumber} : {answers[questionNumber] ? 'Oui' : 'Non'}
            </li>
          ))}
        </ul>

      </div>
    )
}
  export default Results

/*
//Object.keys permet de récupérer les clés d'un objet ici les numéros de questions de l'enquête Survey sous forme de tableau
<p>Voici les réponses que vous avez données :</p>
<ul>
  {Object.keys(answers).map((questionNumber) => (
    <li key={questionNumber}>
      Question {questionNumber} : {answers[questionNumber] ? 'Oui' : 'Non'}
    </li>
  ))}
</ul>
*/