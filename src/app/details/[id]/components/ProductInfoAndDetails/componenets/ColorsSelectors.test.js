import { render, screen, fireEvent } from "@testing-library/react";
import ColorsSelectors from "./ColorsSelectors";
import SingleColorSelector from "./SingleColorSelector";

jest.mock("./SingleColorSelector", () => jest.fn(({ color, onClick, selectedColor }) => (
  <div
    data-testid={`color-selector-${color}`}
    onClick={() => onClick(color)}
    style={{ border: selectedColor === color ? "2px solid black" : "none" }}
  >
    {color}
  </div>
)));

describe("ColorsSelectors", () => {
  const colorOptions = ["red", "blue", "green", "yellow"];
  let setSelectedColor;

  beforeEach(() => {
    setSelectedColor = jest.fn();
  });

  test("debe renderizar todos los selectores de color correctamente", () => {
    render(<ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={"blue"} />);

    colorOptions.forEach(color => {
      expect(screen.getByTestId(`color-selector-${color}`)).toBeInTheDocument();
    });
  });

  test("debe resaltar el color seleccionado", () => {
    render(<ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={"green"} />);

    const selectedColorElement = screen.getByTestId("color-selector-green");
    expect(selectedColorElement).toHaveStyle("border: 2px solid black");
  });

  test("debe llamar a setSelectedColor cuando se selecciona un color", () => {
    render(<ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={"blue"} />);

    const redSelector = screen.getByTestId("color-selector-red");
    fireEvent.click(redSelector);
    expect(setSelectedColor).toHaveBeenCalledWith("red");
  });

  test("debe cambiar la selección al hacer clic en otro color", () => {
    render(<ColorsSelectors colorOptions={colorOptions} setSelectedColor={setSelectedColor} selectedColor={"red"} />);

    const yellowSelector = screen.getByTestId("color-selector-yellow");
    fireEvent.click(yellowSelector);
    expect(setSelectedColor).toHaveBeenCalledWith("yellow");
  });
});
