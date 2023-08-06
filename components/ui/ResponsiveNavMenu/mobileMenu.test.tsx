import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MobileMenu from "./responsiveNavMenu";
import '@testing-library/jest-dom/extend-expect';



describe("MobileMenu tests", () => {
    it("should toggle menu when button is clicked", () => {
      const { getByTestId, queryByRole } = render(<MobileMenu menuItems={[]} />);
  
      // Verify that the menu is initially hidden
      const menu = queryByRole("menu");
      expect(menu).toBeNull();
  
      // Find the toggle button and click it
      const toggleButton = getByTestId("mobile-menu-toggle");
      fireEvent.click(toggleButton);
  
      // Verify that the menu is now visible
      const updatedMenu = queryByRole("menu");
      expect(updatedMenu).toBeInTheDocument();
  
      // Click the button again to hide the menu
      fireEvent.click(toggleButton);
  
      // Verify that the menu is hidden again
      const hiddenMenu = queryByRole("menu");
      expect(hiddenMenu).toBeNull();
    });
  });
 
  
