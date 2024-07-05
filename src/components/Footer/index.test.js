// ---------> Test du composant footer qui pemet de changer de theme

import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
//le footer a besoin du contexte pour fonctionner, sans lui il crash
import { ThemeProvider } from '../../utils/context'

//verifie que le footer ce rende bien sans crash
describe('Footer', () => 
{
    test('should render without crashing', async () => 
    {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })

    //verifie que le bouton de changement de theme fonctionne
    test('should change theme', async () => 
    {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        //screeen est un objet qui permet de récupérer des éléments du DOM
        //getByRole permet de récupérer un élément par son role, ici un bouton (autre roles possible : link, heading, img, option, etc.)
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode :  ☀️')
        
        //fireEvent permet de simuler un événement du DOM, ici un clic
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode :  🌙')
    })
})