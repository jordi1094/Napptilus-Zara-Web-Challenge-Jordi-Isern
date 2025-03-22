import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the logo with correct src and alt", () => {
    render(<Header />);
    const logoImage = screen.getByRole("img", {
      name: "Logo from the brand MBST",
    });
    expect(logoImage).toBeInTheDocument();
  });
});
