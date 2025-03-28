import { render, screen, fireEvent } from '@testing-library/react';
import SingleStorageSelector from './SingleStorageSelector';

describe('SingleStorageSelector', () => {
  const storage = { id: 1, capacity: '64GB', price: 50 };
  const selectedStorage = { id: 1, capacity: '64GB', price: 50 };
  const onClick = jest.fn();

  test('debería renderizar correctamente el selector de almacenamiento', () => {
    render(
      <SingleStorageSelector
        storage={storage}
        selectedStorage={selectedStorage}
        onClick={onClick}
      />
    );

    const storageElement = screen.getByText(storage.capacity);
    expect(storageElement).toBeInTheDocument();
  });

  test('debería aplicar la clase "selected" cuando el almacenamiento está seleccionado', () => {
    render(
      <SingleStorageSelector
        storage={storage}
        selectedStorage={selectedStorage}
        onClick={onClick}
      />
    );

    const storageElement = screen.getByText(storage.capacity);

    expect(storageElement.parentElement).toHaveClass('selected');
  });

  test('debería aplicar la clase "unselected" cuando el almacenamiento no está seleccionado', () => {
    render(
      <SingleStorageSelector
        storage={storage}
        selectedStorage={null}
        onClick={onClick}
      />
    );

    const storageElement = screen.getByText(storage.capacity);

    expect(storageElement.parentElement).toHaveClass('unselected');
  });

  test('debería llamar a onClick cuando se hace clic en el almacenamiento', () => {
    render(
      <SingleStorageSelector
        storage={storage}
        selectedStorage={selectedStorage}
        onClick={onClick}
      />
    );

    const storageElement = screen.getByText(storage.capacity);

    fireEvent.click(storageElement);

    expect(onClick).toHaveBeenCalled();
  });
});
