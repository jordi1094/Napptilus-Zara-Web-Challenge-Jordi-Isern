import { render, screen, fireEvent } from '@testing-library/react';
import StorageSelectors from './StorageSelectors';
import SingleStorageSelector from './SingleStorageSelector';


describe('StorageSelectors', () => {
  const storageOptions = [
    { id: 1, capacity: '64GB', price: 50 },
    { id: 2, capacity: '128GB', price: 100 },
  ];
  const setSelectedStorage = jest.fn();
  const selectedStorage = { id: 1, capacity: '64GB', price: 50 };

  test('debería renderizar correctamente los selectores de almacenamiento', () => {
    render(
      <StorageSelectors
        storageOptions={storageOptions}
        setSelectedStorage={setSelectedStorage}
        selectedStorage={selectedStorage}
      />
    );

    const storageElements = screen.getAllByText(/GB/);
    expect(storageElements).toHaveLength(storageOptions.length);
  });

  test('debería llamar a setSelectedStorage cuando se hace clic en un selector de almacenamiento', () => {
    render(
      <StorageSelectors
        storageOptions={storageOptions}
        setSelectedStorage={setSelectedStorage}
        selectedStorage={selectedStorage}
      />
    );

    const firstStorage = screen.getByText('64GB');
    fireEvent.click(firstStorage);

    expect(setSelectedStorage).toHaveBeenCalledWith(storageOptions[0]);
  });

  test('debería pasar el almacenamiento seleccionado al componente SingleStorageSelector', () => {
    render(
      <StorageSelectors
        storageOptions={storageOptions}
        setSelectedStorage={setSelectedStorage}
        selectedStorage={selectedStorage}
      />
    );

    const firstStorage = screen.getByText('64GB');
    expect(firstStorage.closest('div')).toHaveClass('selected');
  });

  test('debería renderizar el componente SingleStorageSelector con onClick correcto', () => {
    render(
      <StorageSelectors
        storageOptions={storageOptions}
        setSelectedStorage={setSelectedStorage}
        selectedStorage={selectedStorage}
      />
    );

    const firstStorage = screen.getAllByRole("StorageSelectorButton");
    fireEvent.click(firstStorage[0]);
    expect(setSelectedStorage).toHaveBeenCalledTimes(2);
  });
});
