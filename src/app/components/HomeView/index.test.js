import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./index";
import SearchWrapper from "../SearchWrapper";
import ProductGrid from "../ProductsGrid";
import Header from "@/components/header/header";
import logic from "@/logic/index";
import { useDebounce } from "../../../hooks/useDebounce";

jest.mock("../SearchWrapper", () => jest.fn(({ onSearch }) => (
  <div data-testid="search-wrapper">
    <input data-testid="search-input" onChange={(e) => onSearch(e.target.value)} />
  </div>
)));
jest.mock("../ProductsGrid", () => jest.fn(({ productsList }) => <div data-testid="product-grid">{productsList.length}</div>));
jest.mock("@/components/header/header", () => jest.fn(() => <div data-testid="header"></div>));
jest.mock("@/logic/index", () => ({ getProductsList: jest.fn() }));
jest.mock("../../../hooks/useDebounce", () => ({ useDebounce: jest.fn((val) => val) }));

describe("Home", () => {
  const defaultProductList = [
    {
      id: "1",
      brand: "Apple",
      name: "iPhone 12",
      basePrice: 909,
      imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
    }
  ];

  beforeEach(() => {
    logic.getProductsList.mockResolvedValue(defaultProductList);
  });

  test("debe renderizar los componentes Header, SearchWrapper y ProductGrid correctamente", () => {
    render(<Home defaultProductList={defaultProductList} />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("search-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("product-grid")).toHaveTextContent(defaultProductList.length);
  });

  test("debe actualizar la búsqueda y llamar a getProductsList", async () => {
    render(<Home defaultProductList={defaultProductList} />);
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "iPhone" } });

    await waitFor(() => {
      expect(logic.getProductsList).toHaveBeenCalledWith("iPhone");
    });
  });

  test("debe actualizar la lista de productos cuando getProductsList devuelve nuevos resultados", async () => {
    const newProductList = [
      {
        id: "2",
        brand: "Samsung",
        name: "Galaxy S21",
        basePrice: 799,
        imageUrl: "https://example.com/samsung.jpg"
      }
    ];
    logic.getProductsList.mockResolvedValue(newProductList);

    render(<Home defaultProductList={defaultProductList} />);
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "Galaxy" } });

    await waitFor(() => {
      expect(screen.getByTestId("product-grid")).toHaveTextContent(newProductList.length);
    });
  });
});
