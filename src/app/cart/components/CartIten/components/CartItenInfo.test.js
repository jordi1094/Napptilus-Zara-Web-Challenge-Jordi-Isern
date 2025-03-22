import { render, screen } from "@testing-library/react";
import CartItemInfo from "./CartItemInfo";

describe("CartItemInfo Component", () => {
  const mockProduct = {
    productName: "Galaxy S24 Ultra",
    productCapacity: "512 GB",
    productColor: "Titanium Yellow",
    productPrice: 1329,
  };

  test("debe renderizar correctamente los detalles del producto", () => {
    render(
      <CartItemInfo
        productName={mockProduct.productName}
        productCapacity={mockProduct.productCapacity}
        productColor={mockProduct.productColor}
        productPrice={mockProduct.productPrice}
      />
    );

    expect(screen.getByText(mockProduct.productName)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.productCapacity} | ${mockProduct.productColor}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.productPrice)).toBeInTheDocument();
  });
});
