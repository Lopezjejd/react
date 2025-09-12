
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // simula un entorno de enrutamiento
import Header from  "./Header";


describe("Header",()=>{
    it("renders the header with navigation links",()=>{
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByText("Mi Tienda")).toBeInTheDocument();
        expect(screen.getByText("Inicio")).toBeInTheDocument();
        expect(screen.getByText("Carrito")).toBeInTheDocument();
    });
})