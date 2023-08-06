import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MobileMenu from "./mobileMenu";
import "@testing-library/jest-dom/extend-expect";

const menuItems = [
    { content: 'Welcome Center', href: '#welcome-center' },
    { content: 'Consideraciones grals.', href: '#consideraciones-generales' },
    { content: 'Numeros Emergencia', href: '#numeros-emergencia' },
    { content: 'Salud', href: '#salud' },
    { content: 'Urgencias dentales', href: '#urgencias-dentales' },
    { content: 'Violencia contra la mujer', href: '#violencia-contra-la-mujer' },
    { content: 'Otros números', href: '#otros' },
    { content: 'Adicciones', href: '#adicciones' },
  ];

  describe("MobileMenu tests", () => {
    it("should toggle menu when button is clicked", () => {
      render(<MobileMenu menuItems={menuItems} />);

      const mobileMenu = screen.getByRole("menu");
      expect(mobileMenu).toHaveClass("hidden"); 

      const toggleButton = screen.getByLabelText("Toggle Menu");
      fireEvent.click(toggleButton);

      expect(mobileMenu).not.toHaveClass("hidden");

      fireEvent.click(toggleButton);
      
      expect(mobileMenu).toHaveClass("hidden");
    });
  });