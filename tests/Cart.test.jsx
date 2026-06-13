import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Cart from "../src/components/Cart";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");

  return {
    ...actual,
    useOutletContext: () => ({
      userChoice: [
        {
          id: 1,
          title: "Shirt",
          price: 20,
          image: "shirt.jpg",
        },
      ],
      setUserChoice: vi.fn(),
    }),
  };
});

describe("Cart", () => {
  it("renders total price", () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
    );

    expect(screen.getByText(/total price/i)).toBeInTheDocument();
  });
});
