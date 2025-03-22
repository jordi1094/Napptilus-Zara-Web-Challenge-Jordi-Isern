import { render, screen } from "@testing-library/react";
import ProductSpecsFrame from "./index";

jest.mock("./components/ProductSpec", () => ({ spect, spectDescription }) => (
  <div data-testid="product-spec">
    <h5>{spect}</h5>
    <p>{spectDescription}</p>
  </div>
));

describe("ProductSpecsFrame Component", () => {
  const mockSpecs = {
    "Screen Size": "6.7 inches",
    Battery: "5000mAh",
    Storage: "128GB",
  };

  test("debe renderizar correctamente las especificaciones", () => {
    render(<ProductSpecsFrame specs={mockSpecs} />);

    expect(screen.getByText("SPECIFICATIONS")).toBeInTheDocument();

    Object.keys(mockSpecs).forEach((specName) => {
      expect(screen.getByText(specName)).toBeInTheDocument();
      expect(screen.getByText(mockSpecs[specName])).toBeInTheDocument();
    });
  });

  test("debe renderizar el componente ProductSpec para cada especificación", () => {
    render(<ProductSpecsFrame specs={mockSpecs} />);

    const productSpecItems = screen.getAllByTestId("product-spec");
    expect(productSpecItems).toHaveLength(Object.keys(mockSpecs).length);
  });
});
