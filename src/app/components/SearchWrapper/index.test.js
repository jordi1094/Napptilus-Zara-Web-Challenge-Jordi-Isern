import { render, screen } from "@testing-library/react";
import SearchWrapper from "./index";
import Search from "./components/Search";
import ResultsCounter from "./components/ResultsCounter";

jest.mock("./components/Search", () => jest.fn(() => <div data-testid="search-component"></div>));
jest.mock("./components/ResultsCounter", () => jest.fn(({ numOfPoducts }) => <div data-testid="results-counter">{numOfPoducts}</div>));

describe("SearchWrapper", () => {
  test("debe renderizar los componentes Search y ResultsCounter correctamente", () => {
    const mockOnSearch = jest.fn();
    const numOfPoducts = 10;

    render(<SearchWrapper numOfPoducts={numOfPoducts} onSearch={mockOnSearch} />);

    expect(screen.getByTestId("search-component")).toBeInTheDocument();
    expect(screen.getByTestId("results-counter")).toHaveTextContent(numOfPoducts);
  });
});
