import { render, screen, fireEvent } from "@testing-library/react";
import DeleteItemButton from "./DeleteItemButton";
import cart from "@/logic/cart";

jest.mock("@/logic/cart", () => ({
  deleteProduct: jest.fn(),
}));

describe("DeleteItemButton Component", () => {
  const mockOnDeleteItem = jest.fn();
  const mockIndex = 0;

  test("debe renderizar el botón de eliminar correctamente", () => {
    render(<DeleteItemButton index={mockIndex} onDeleteItem={mockOnDeleteItem} />);
    expect(screen.getByText("Eliminar")).toBeInTheDocument();
  });

  test("debe llamar a onDeleteItem cuando se hace clic en el botón de eliminar", () => {
    render(<DeleteItemButton index={mockIndex} onDeleteItem={mockOnDeleteItem} />);
    const deleteButton = screen.getByText("Eliminar");
    fireEvent.click(deleteButton);
    expect(mockOnDeleteItem).toHaveBeenCalledTimes(1);
  });

  test("debe llamar a cart.deleteProduct con el índice correcto al hacer clic en el botón de eliminar", () => {
    render(<DeleteItemButton index={mockIndex} onDeleteItem={mockOnDeleteItem} />);
    const deleteButton = screen.getByText("Eliminar");
    fireEvent.click(deleteButton);
    expect(cart.deleteProduct).toHaveBeenCalledWith(mockIndex);
  });
});
