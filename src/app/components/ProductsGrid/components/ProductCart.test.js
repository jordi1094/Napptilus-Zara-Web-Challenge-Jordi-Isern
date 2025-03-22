import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import '@testing-library/react';

jest.mock('next/image', () => {
    return function NextImage({
        children,
        ...props
    }) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                alt="test-img"
                {...{
                    ...props,
                    fill: undefined,
                }}>
                {children}
            </img>
        );
    };
});


describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Product Name',
    brand: 'Brand Name',
    basePrice: 100,
    imageUrl: 'https://example.com/product-image.jpg',
  };

  test('debería renderizar el enlace con la URL correcta', () => {
    render(<ProductCard product={mockProduct} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/details/${mockProduct.id}`);
  });

  test('debería renderizar la imagen con la URL correcta y el alt correcto', () => {
    render(<ProductCard product={mockProduct} />);
    const imageElement = screen.getByAltText(`Image from the phone ${mockProduct.name}`);
    expect(imageElement).toHaveAttribute('src', mockProduct.imageUrl);
  });

  test('debería renderizar correctamente el nombre y la marca del producto', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.brand.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(mockProduct.name.toUpperCase())).toBeInTheDocument();
  });

  test('debería renderizar el precio correctamente', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(`${mockProduct.basePrice} EUR`)).toBeInTheDocument();
  });
});
