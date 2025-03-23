import { render, screen, fireEvent } from "@testing-library/react";
import FooterCart from "./index";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/components/ButtonLigth", () => ({ onClick, status, children }) => (
  <button onClick={onClick} disabled={!status}>
    {children}
  </button>
));

jest.mock("@/components/ButtonDark", () => ({ status, children }) => (
  <button disabled={!status}>{children}</button>
));

describe("FooterCart Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
  });

  test("debe renderizar el componente con productos y total correcto", () => {
    const mockProducts = [
      {
        selectedStorage: {
          price: 1329,
        },
      },
      {
        selectedStorage: {
          price: 1319,
        },
      },
    ];

    render(<FooterCart products={mockProducts} />);

    expect(screen.getByText("TOTAL")).toBeInTheDocument();
    expect(screen.getByText("2648 EUR")).toBeInTheDocument();
    expect(screen.getByText("CONTINUE SHOPPING")).toBeInTheDocument();
    expect(screen.getByText("PAY")).toBeInTheDocument();
  });

  test("el botón CONTINUE SHOPPING debe llevar al usuario a la página principal", () => {
    const mockProducts = [
      {
        selectedStorage: {
          price: 1329,
        },
      },
    ];

    render(<FooterCart products={mockProducts} />);

    const continueShoppingButton = screen.getByText("CONTINUE SHOPPING");
    fireEvent.click(continueShoppingButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });

  test("el botón PAY debe estar habilitado si hay productos en el carrito", () => {
    const mockProducts = [
      {
        selectedStorage: {
          price: 1329,
        },
      },
    ];

    render(<FooterCart products={mockProducts} />);

    const payButton = screen.getByText("PAY");
    expect(payButton).not.toBeDisabled();
  });

  test("el botón PAY debe estar deshabilitado si el carrito está vacío", () => {
    const mockProducts = [];

    render(<FooterCart products={mockProducts} />);

    const payButton = screen.getByText("PAY");
    expect(payButton).toBeDisabled();
  });
});
