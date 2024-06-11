import React, { useState, createContext } from 'react'

//création du contexte
export const ThemeContext = createContext()

//création du provider (fournisseur de theme) du contexte pour le rendre disponible à l'ensemble de l'application
export const ThemeProvider = ({ children }) => 
{
    const [theme, setTheme] = useState('light')

    //fonction pour changer le thème toogle = basculer
    const toggleTheme = () => 
    {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        //fourniture du contexte grace à la méthode Provider de ThemeContext avec les valeurs theme et toggleTheme 
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    )
}

// ---------------- 

//creation du contexte qui contiendra les réponses de l'enquête Survey
export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => 
{
    //état initial de la variable answers
    const [answers, setAnswers] = useState({})

    //fonction pour sauvegarder les réponses. elle sont sauvegardées en JSON dans la variable answers
    const saveAnswers = (newAnswers) => 
    {
        setAnswers({ ...answers, ...newAnswers })
    }

    //fourniture du contexte grace à la méthode Provider de SurveyContext avec les valeurs answers et saveAnswers qui permettront de sauvegarder les réponses de l'enquette Survey dans le contexte
    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
        {children}
        </SurveyContext.Provider>
    )
}