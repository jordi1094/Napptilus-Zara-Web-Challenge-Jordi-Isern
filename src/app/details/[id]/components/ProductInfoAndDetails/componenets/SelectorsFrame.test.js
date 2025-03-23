import { render, screen, fireEvent } from '@testing-library/react';
import SelectorsFrame from './SelectorsFrame';


describe('SelectorsFrame', () => {
  const storageOptions = [
    { id: 1, capacity: '64GB', price: 50 },
    { id: 2, capacity: '128GB', price: 100 },
  ];

  const colorOptions = [
    { id: 1, name: 'Red', hexCode: '#FF0000' },
    { id: 2, name: 'Blue', hexCode: '#0000FF' },
  ];
  

  const setSelectedStorage = jest.fn();
  const setSelectedColor = jest.fn();

  test('debería renderizar los títulos de selector de almacenamiento y color', () => {
    render(
      <SelectorsFrame
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        selectedStorage={null}
        selectedColor={null}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
    );

    const storageTitle = screen.getByText(/STORAGE ¿HOW MUCH DO YOU NEED?/i);
    const colorTitle = screen.getByText(/COLOR, PICK YOUR FAVOURITE/i);

    expect(storageTitle).toBeInTheDocument();
    expect(colorTitle).toBeInTheDocument();
  });

  test('debería llamar a setSelectedStorage cuando se selecciona una opción de almacenamiento', () => {
    render(
      <SelectorsFrame
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        selectedStorage={null}
        selectedColor={null}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
    );

    const storageSelect = screen.getByText('64GB');
    fireEvent.click(storageSelect);

    expect(setSelectedStorage).toHaveBeenCalledWith(storageOptions[0]);
  });

  test('debería llamar a setSelectedColor cuando se selecciona una opción de color', () => {
    render(
      <SelectorsFrame
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        selectedStorage={null}
        selectedColor={null}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
    );

    const colorSelect = screen.getByTestId(colorOptions[0].hexCode);
    fireEvent.click(colorSelect);

    expect(setSelectedColor).toHaveBeenCalledWith({"hexCode": "#FF0000", "id": 1, "name": "Red"});
  });

  test('debería mostrar el nombre del color seleccionado', () => {
    render(
      <SelectorsFrame
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        selectedStorage={null}
        selectedColor={colorOptions[0]}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
    );

    const redSelector = screen.getByTestId("#FF0000");
    fireEvent.click(redSelector);
    const colorName = screen.getByRole("colorName")
    expect(colorName).toBeInTheDocument();
  });

  test('debería mostrar un espacio si no se selecciona ningún color', () => {
    render(
      <SelectorsFrame
        storageOptions={storageOptions}
        colorOptions={colorOptions}
        selectedStorage={null}
        selectedColor={null}
        setSelectedStorage={setSelectedStorage}
        setSelectedColor={setSelectedColor}
      />
    );
  

    const colorName = screen.getByRole("colorName")
    expect(colorName).toBeInTheDocument();
  });
});
