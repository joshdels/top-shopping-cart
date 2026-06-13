// Add item
// Remove item
// Cart total updates
// Empty cart message

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Navigation from "../src/components/Navigation";

describe("Navigation", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Navigation userChoice={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Trifty/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });
});
