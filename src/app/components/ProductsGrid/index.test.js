import { render, screen } from "@testing-library/react";
import ProductGrid from "./index";

jest.mock("./components/ProductCard", () => ({ product }) => (
  <div data-testid="product-card">{product.name}</div>
));

describe("ProductGrid Component", () => {
  test("renderiza el contenedor de la grid", () => {
    render(<ProductGrid productsList={[]} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  test("renderiza correctamente los productos", () => {
    const mockProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    render(<ProductGrid productsList={mockProducts} />);

    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(mockProducts.length);
    expect(productCards[0]).toHaveTextContent("Product 1");
    expect(productCards[1]).toHaveTextContent("Product 2");
  });

  test("maneja correctamente el caso cuando no hay productos", () => {
    render(<ProductGrid productsList={[]} />);
    expect(screen.queryByTestId("product-card")).not.toBeInTheDocument();
  });
});
