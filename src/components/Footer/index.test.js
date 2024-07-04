// ---------> Test du composant footer qui pemet de changer de theme

import Footer from './'
import { render } from '@testing-library/react'
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

})