import { render, screen } from '@testing-library/react';
import ProductInfoFrame from './ProductInfoFrame';


describe('ProductInfoFrame', () => {
  const product = {
    name: 'Test Product',
    basePrice: 20,
  };

  test('debería renderizar el nombre del producto en mayúsculas', () => {
    render(<ProductInfoFrame product={product} selectedStorage={null} />);
    
    const titleElement = screen.getByText(/TEST PRODUCT/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('debería mostrar el precio base cuando no hay un almacenamiento seleccionado', () => {
    render(<ProductInfoFrame product={product} selectedStorage={null} />);
    
    const priceElement = screen.getByText(/FROM 20 EUR/i);
    expect(priceElement).toBeInTheDocument();
  });

  test('debería mostrar el precio del almacenamiento seleccionado cuando se pasa uno', () => {
    const selectedStorage = {
      price: 25,
    };

    render(<ProductInfoFrame product={product} selectedStorage={selectedStorage} />);
    
    const priceElement = screen.getByText(/25 EUR/i);
    expect(priceElement).toBeInTheDocument();
  });
});
