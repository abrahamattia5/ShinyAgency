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