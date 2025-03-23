import { render, screen, waitFor } from "@testing-library/react";
import Cart from "./page";
import cart from "@/logic/cart";

jest.mock("@/logic/cart", () => ({
  getProdcuts: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("Cart Component", () => {
  const mockProducts = [
    {
      name: "Galaxy S24 Ultra",
      basePrice: 1329,
      selectedColor: {
        name: "Titanium Yellow",
        hexCode: "#FFFF00",
        imageUrl:
          "https://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png",
      },
      selectedStorage: {
        capacity: "512 GB",
        price: 1329,
      },
    },
    {
      name: "iPhone 15 Pro Max",
      basePrice: 1319,
      selectedColor: {
        name: "Titanio Natural",
        hexCode: "#DBCEC3",
        imageUrl:
          "https://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-natural.png",
      },
      selectedStorage: {
        capacity: "256 GB",
        price: 1319,
      },
    },
  ];

  beforeEach(() => {
    cart.getProdcuts.mockReturnValue(mockProducts);
  });

  test("debería renderizar correctamente el carrito con productos", async () => {
    render(<Cart />);

    expect(screen.getByRole("banner")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText(mockProducts[0].name.toUpperCase()),
      ).toBeInTheDocument();
      expect(
        screen.getByText(mockProducts[1].name.toUpperCase()),
      ).toBeInTheDocument();
    });

    const totalPrice = mockProducts.reduce(
      (sum, product) => sum + product.selectedStorage.price,
      0,
    );

    expect(screen.getByText(`${totalPrice} EUR`)).toBeInTheDocument();

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name.toUpperCase())).toBeInTheDocument();
    });
  });

  test("no debería renderizar CartItem cuando el carrito está vacío", async () => {
    cart.getProdcuts.mockReturnValue([]);

    render(<Cart />);

    await waitFor(() => {
      expect(screen.queryByRole("listitem")).toBeNull();
    });
  });
});
