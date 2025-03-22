import { render, screen, fireEvent } from "@testing-library/react";
import ButtonLigth from "./index";

describe("ButtonLigth Component", () => {
  test("debe renderizar correctamente el botón", () => {
    render(<ButtonLigth status={true}>Click me</ButtonLigth>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("debe aplicar la clase correcta cuando está habilitado", () => {
    const { container } = render(<ButtonLigth status={true}>Click me</ButtonLigth>);
    expect(container.firstChild).toHaveClass("buttonEnable");
  });

  test("debe aplicar la clase correcta cuando está deshabilitado", () => {
    const { container } = render(<ButtonLigth status={false}>Click me</ButtonLigth>);
    expect(container.firstChild).toHaveClass("buttonDissable");
  });

  test("debe ejecutar onClick cuando está habilitado", () => {
    const onClickMock = jest.fn();
    render(<ButtonLigth status={true} onClick={onClickMock}>Click me</ButtonLigth>);
    
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  test("no debe ejecutar onClick cuando está deshabilitado", () => {
    const onClickMock = jest.fn();
    render(<ButtonLigth status={false} onClick={onClickMock}>Click me</ButtonLigth>);

    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test("debe aplicar el customHeight correctamente", () => {
    render(<ButtonLigth status={true} customHeight="60px">Click me</ButtonLigth>);
    expect(screen.getByText("Click me")).toHaveStyle({ height: "60px" });
  });
});
