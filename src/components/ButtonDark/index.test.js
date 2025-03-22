import { render, screen, fireEvent } from "@testing-library/react";
import ButtonDark from "./index";

describe("ButtonDark Component", () => {
  test("debe renderizar correctamente el botón", () => {
    render(<ButtonDark status={true}>Click me</ButtonDark>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("debe aplicar la clase correcta cuando está habilitado", () => {
    const { container } = render(<ButtonDark status={true}>Click me</ButtonDark>);
    expect(container.firstChild).toHaveClass("buttonEnable");
  });

  test("debe aplicar la clase correcta cuando está deshabilitado", () => {
    const { container } = render(<ButtonDark status={false}>Click me</ButtonDark>);
    expect(container.firstChild).toHaveClass("buttonDissable");
  });

  test("debe ejecutar onClick cuando está habilitado", () => {
    const onClickMock = jest.fn();
    render(<ButtonDark status={true} onClick={onClickMock}>Click me</ButtonDark>);
    
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  test("no debe ejecutar onClick cuando está deshabilitado", () => {
    const onClickMock = jest.fn();
    render(<ButtonDark status={false} onClick={onClickMock}>Click me</ButtonDark>);

    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test("debe aplicar el customHeight correctamente", () => {
    render(<ButtonDark status={true} customHeight="50px">Click me</ButtonDark>);
    expect(screen.getByText("Click me")).toHaveStyle({ height: "50px" });
  });
});
