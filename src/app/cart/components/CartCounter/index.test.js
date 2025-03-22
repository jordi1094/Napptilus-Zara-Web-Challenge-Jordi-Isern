import { render, screen } from "@testing-library/react";
import CartCounter from "./index";

const mockProductsInCart = [
  {
    name: "Galaxy S24 Ultra",
    selectedColor: {
      name: "Titanium Yellow",
      hexCode: "#FFFF00",
      imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png"
    },
    selectedStorage: {
      capacity: "512 GB",
      price: 1329
    }
  },
  {
    name: "iPhone 15 Pro Max",
    selectedColor: {
      name: "Titanio Natural",
      hexCode: "#DBCEC3",
      imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-natural.png"
    },
    selectedStorage: {
      capacity: "256 GB",
      price: 1319
    }
  },
  {
    name: "iPhone 15 Pro Max",
    selectedColor: {
      name: "Titanio Azul",
      hexCode: "#3A4A5A",
      imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-azul.png"
    },
    selectedStorage: {
      capacity: "256 GB",
      price: 1319
    }
  }
];

describe("CartCounter Component", () => {
  test("should render the correct cart count", () => {
    render(<CartCounter productsInCart={mockProductsInCart} />);
    
    expect(screen.getByText(`CART (${mockProductsInCart.length})`)).toBeInTheDocument();
  });
});
``
