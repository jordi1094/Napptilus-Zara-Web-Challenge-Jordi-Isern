import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddToCartButton from "./AddToCartButton";
import cart from "@/logic/cart";
import { useRouter } from "next/navigation";

jest.mock("@/logic/cart", () => ({
  addProduct: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("AddToCartButton", () => {
  const mockRouterPush = jest.fn();
  const mockProduct = {
    name: "Galaxy S24 Ultra",
    selectedColor: {
      name: "Titanium Yellow",
      hexCode: "#FFFF00",
      imageUrl: "some-url",
    },
    selectedStorage: { capacity: "512 GB", price: 1329 },
  };

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockRouterPush });
  });

  test("debe renderizar el botón con el texto 'AÑADIR'", () => {
    render(
      <AddToCartButton
        name={mockProduct.name}
        selectedColor={mockProduct.selectedColor}
        selectedStorage={mockProduct.selectedStorage}
      />,
    );
    expect(screen.getByText("AÑADIR")).toBeInTheDocument();
  });

  test("debe llamar a cart.addProduct y navegar a '/cart' cuando se haga clic en el botón", async () => {
    render(
      <AddToCartButton
        name={mockProduct.name}
        selectedColor={mockProduct.selectedColor}
        selectedStorage={mockProduct.selectedStorage}
      />,
    );

    const button = screen.getByText("AÑADIR");
    fireEvent.click(button);

    await waitFor(() => {
      expect(cart.addProduct).toHaveBeenCalledWith({
        name: mockProduct.name,
        selectedColor: mockProduct.selectedColor,
        selectedStorage: mockProduct.selectedStorage,
      });
      expect(mockRouterPush).toHaveBeenCalledWith("/cart");
    });
  });

  test("debe deshabilitar el botón cuando falta selectedColor o selectedStorage", () => {
    render(
      <AddToCartButton
        name={mockProduct.name}
        selectedStorage={mockProduct.selectedStorage}
      />,
    );
    const button = screen.getByText("AÑADIR");
    expect(button).toHaveClass("buttonDissable");
  });

  test("debe habilitar el botón cuando ambos selectedColor y selectedStorage están presentes", () => {
    render(
      <AddToCartButton
        name={mockProduct.name}
        selectedColor={mockProduct.selectedColor}
        selectedStorage={mockProduct.selectedStorage}
      />,
    );
    const button = screen.getByText("AÑADIR");
    expect(button).not.toHaveAttribute("buttonDissable");
  });
});
