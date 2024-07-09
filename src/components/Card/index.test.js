import Card from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Card", () => 
{
    test("Should render title and image", async () => 
    {
        render(
            <ThemeProvider>
                <Card
                    label="Magicien frontend"
                    picture="/myPicture.png"
                    title="Harry Potter"
                />
            </ThemeProvider>
        );
        const cardPicture = screen.getByRole("img");
        const cardTitle = screen.getByText(/Harry/i);

        expect(cardPicture.src).toBe("http://localhost/myPicture.png");
        expect(cardTitle.textContent).toContain("Harry Potter☆");
    });

    test("Should the ☆ change to ⭐️ on click", async () => 
    {
        render(
            <ThemeProvider>
                <Card
                    title="Harry Potter"
                    label="Magicien frontend"
                    picture="/myPicture.png"
                />
            </ThemeProvider>
        );

        // Récupérer le titre de la carte
        const cardTitle = screen.getByText(/Harry Potter/);

        // Vérifier que le titre contient bien Harry Potter ☆
        expect(cardTitle.textContent).toContain("Harry Potter☆");

        // Cliquer sur l'étoile contenue dans un span dans le titre de la carte
        const starElement = screen.getByText("☆");
        fireEvent.click(starElement);

        // Vérifier que le titre contient bien Harry Potter ⭐️
        expect(cardTitle.textContent).toContain("Harry Potter⭐️");
    });
});
