import { render, screen } from "@testing-library/react";
import ProductSpec from "./ProductSpec";

describe("ProductSpec Component", () => {
  const mockSpec = {
    spect: "Screen Size",
    spectDescription: "6.7 inches",
  };

  test("debe renderizar correctamente la especificación y su descripción", () => {
    render(
      <ProductSpec
        spect={mockSpec.spect}
        spectDescription={mockSpec.spectDescription}
      />,
    );

    expect(screen.getByText(mockSpec.spect.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(mockSpec.spectDescription)).toBeInTheDocument();
  });

  test("la clave de la especificación debe estar en mayúsculas", () => {
    render(
      <ProductSpec
        spect={mockSpec.spect}
        spectDescription={mockSpec.spectDescription}
      />,
    );

    expect(screen.getByText(mockSpec.spect.toUpperCase())).toHaveTextContent(
      mockSpec.spect.toUpperCase(),
    );
  });
});
