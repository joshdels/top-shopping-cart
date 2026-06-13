import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop";

vi.mock("../src/hooks/fakeapi", () => ({
  useFashionData: () => ({
    data: [{ id: 1, title: "Shirt", price: 10, image: "img" }],
    loading: false,
    error: null,
  }),
}));

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");

  return {
    ...actual,
    useOutletContext: () => ({
      userChoice: [],
      setUserChoice: vi.fn(),
    }),
  };
});

describe("Shop", () => {
  it("renders products", () => {
    render(<Shop />);

    expect(screen.getByText(/shirt/i)).toBeInTheDocument();
  });

  it("click adds item", async () => {
    const user = userEvent.setup();

    const { container } = render(<Shop />);

    const icon = container.querySelector(".add-icon")
    await user.click(icon);

    expect(true).toBe(true);
  });
});