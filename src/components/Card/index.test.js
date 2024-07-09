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
});
