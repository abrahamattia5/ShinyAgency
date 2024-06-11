import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'


const SurveyContainer = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2
`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span
`
  margin: 30px;
`

const LinkWrapper = styled.div
`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button
`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div
`
  display: flex;
  flex-direction: row;
`

function Survey()
{
    
    const { questionNumber } = useParams()

    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1

    const [surveyData, setSurveyData] = useState({}) //objet JSON vide 
    const [isDataLoading, setDataLoading] = useState(false) //changé a avant le chargement des données et remise a False après
    const [error, setError] = useState(false) // capture de l'erreur 

    //chargement des données
    useEffect(() =>
    {
        async function fetchSurvey() 
        {
            setDataLoading(true)

            try 
            {
                //requete fetch pour récupérer les données de l'API
                const response = await fetch(`http://localhost:8000/survey`)

                //récupération des données de l'API en JSON dans la variable surveyData
                const { surveyData } = await response.json()

                //mise à jour de l'état de la variable surveyData
                setSurveyData(surveyData)
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
        //la fonction fetchSurvey est appelée par useEffect
        fetchSurvey()
    }, [])

    if (error) 
    {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>

            {isDataLoading ? 
            (
                <Loader /> //affiche l'icon de chargement tant que les données ne sont pas chargées
            ) : 
            (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}


            <ReplyWrapper>
                <ReplyBox
                    onClick={() => {}}
                >
                    Oui
                </ReplyBox>
                
                <ReplyBox
                    onClick={() => {}}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>


            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

                {surveyData[questionNumberInt + 1] ? 
                (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : 
                (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey