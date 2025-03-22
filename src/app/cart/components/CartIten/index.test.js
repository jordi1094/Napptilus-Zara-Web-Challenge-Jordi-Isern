import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./index";

jest.mock("next/image", () => {
  return function NextImage({ children, ...props }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt="test-img"
        {...{
          ...props,
          fill: undefined,
        }}
      >
        {children}
      </img>
    );
  };
});

describe("CartItem Component", () => {
  const mockProduct = {
    name: "Galaxy S24 Ultra",
    selectedColor: {
      name: "Titanium Yellow",
      hexCode: "#FFFF00",
      imageUrl:
        "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png",
    },
    selectedStorage: {
      capacity: "512 GB",
      price: 1329,
    },
  };

  const mockOnDeleteItem = jest.fn();

  test("debe renderizar el nombre, capacidad, color y precio correctamente", () => {
    render(
      <CartItem
        product={mockProduct}
        index={0}
        onDeleteItem={mockOnDeleteItem}
      />,
    );

    expect(screen.getByText("GALAXY S24 ULTRA")).toBeInTheDocument();
    expect(screen.getByText("512 GB | TITANIUM YELLOW")).toBeInTheDocument();
    expect(screen.getByText("1329")).toBeInTheDocument();
  });

  test("debe renderizar la imagen del producto correctamente", () => {
    render(
      <CartItem
        product={mockProduct}
        index={0}
        onDeleteItem={mockOnDeleteItem}
      />,
    );

    const img = screen.getByAltText(
      "image from GALAXY S24 ULTRA in color TITANIUM YELLOW",
    );
    expect(img).toHaveAttribute("src", mockProduct.selectedColor.imageUrl);
  });

  test("debe llamar a onDeleteItem cuando se hace click en el botón de eliminar", () => {
    render(
      <CartItem
        product={mockProduct}
        index={0}
        onDeleteItem={mockOnDeleteItem}
      />,
    );

    const deleteButton = screen.getByText("Eliminar");
    fireEvent.click(deleteButton);

    expect(mockOnDeleteItem).toHaveBeenCalledTimes(1);
  });
});
