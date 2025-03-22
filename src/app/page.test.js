import { render, screen, waitFor, act } from "@testing-library/react";
import Home from "./page";
import logic from "@/logic/index";
import userEvent from "@testing-library/user-event";

jest.mock("@/logic/index", () => ({
  getProductsList: jest.fn(),
}));

jest.mock("@/components/header/header", () => () => <header data-testid="header" />);
jest.mock("./components/SearchWrapper", () => ({ numOfPoducts, onSearch }) => (
  <div>
    <input
      data-testid="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
    <p data-testid="product-count">{numOfPoducts} products</p>
  </div>
));
jest.mock("./components/ProductsGrid", () => ({ productsList }) => (
  <div data-testid="product-grid">{productsList.length} products rendered</div>
));

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe renderizar Header, SearchWrapper y ProductGrid", async () => {
    logic.getProductsList.mockResolvedValue([]);

    await act(async () => {
      render(<Home />);
    });

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("product-grid")).toBeInTheDocument();
  });

  test("llama a logic.getProductsList en useEffect y actualiza productos", async () => {
    const mockProducts = [{ id: 1, name: "Product 1" }];
    logic.getProductsList.mockResolvedValue(mockProducts);

    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(logic.getProductsList).toHaveBeenCalledWith("");
      expect(screen.getByTestId("product-grid")).toHaveTextContent("1 products rendered");
    });
  });

  test("actualiza productos cuando cambia searchQuery", async () => {
    const mockProductsSearch = [{ id: 2, name: "Product 2" }];
    logic.getProductsList.mockResolvedValue(mockProductsSearch);

    await act(async () => {
      render(<Home />);
    });

    const input = screen.getByTestId("search-input");
    userEvent.type(input, "test");

    await waitFor(() => {
      expect(logic.getProductsList).toHaveBeenCalledWith("test");
      expect(screen.getByTestId("product-grid")).toHaveTextContent("1 products rendered");
    });
  });

  test("muestra la cantidad correcta de productos en SearchWrapper", async () => {
    const mockProducts = [{ id: 1 }, { id: 2 }];
    logic.getProductsList.mockResolvedValue(mockProducts);

    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.getByTestId("product-count")).toHaveTextContent("2 products");
    });
  });
});
