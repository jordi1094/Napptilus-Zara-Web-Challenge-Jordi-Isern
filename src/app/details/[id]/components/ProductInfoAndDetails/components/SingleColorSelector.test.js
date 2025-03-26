import { render, screen, fireEvent } from '@testing-library/react';
import SingleColorSelector from './SingleColorSelector';

describe('SingleColorSelector', () => {
  const color = { id: 1, name: 'Red', hexCode: '#FF0000' };
  const selectedColor = { id: 1, name: 'Red', hexCode: '#FF0000' };
  const onClick = jest.fn();

  test('debería renderizar el color correctamente', () => {
    render(
      <SingleColorSelector
        color={color}
        selectedColor={selectedColor}
        onClick={onClick}
        testId={color.hexCode.slice(1)}
      />
    );

    const colorElement = screen.getByTestId(color.hexCode.slice(1));
    expect(colorElement).toBeInTheDocument();
  });

  test('debería aplicar la clase "selected" cuando el color está seleccionado', () => {
    render(
      <SingleColorSelector
        color={color}
        selectedColor={selectedColor}
        onClick={onClick}
        testId={color.hexCode.slice(1)}
      />
    );

    const colorElement = screen.getByTestId(color.hexCode.slice(1));

    expect(colorElement).toHaveClass('selected');
  });

  test('debería aplicar la clase "unselected" cuando el color no está seleccionado', () => {
    render(
      <SingleColorSelector
        color={color}
        selectedColor={null}
        onClick={onClick}
        testId={color.hexCode.slice(1)}
      />
    );

    const colorElement = screen.getByTestId(color.hexCode.slice(1));


    expect(colorElement).toHaveClass('unselected');
  });

  test('debería llamar a onClick cuando se hace clic en el color', () => {
    render(
      <SingleColorSelector
        color={color}
        selectedColor={selectedColor}
        onClick={onClick}
        testId={color.hexCode.slice(1)}
      />
    );

    const colorElement = screen.getByTestId(color.hexCode.slice(1));

    fireEvent.click(colorElement);

    expect(onClick).toHaveBeenCalled();
  });
});
