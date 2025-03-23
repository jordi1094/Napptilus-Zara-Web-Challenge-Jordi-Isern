import { render, screen } from '@testing-library/react';
import Carousel from './carousel';


describe('Carousel', () => {
  const similarProducts = [
    {
      id: "1",
      brand: "Apple",
      name: "iPhone 12",
      basePrice: 909,
      imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
    }
  ];

  test('debería renderizar correctamente el componente y mostrar los productos similares', () => {
    render(<Carousel similarProducts={similarProducts} />);
    expect(screen.getByText("IPHONE 12")).toBeInTheDocument();
  });

  test('debería renderizar múltiples productos similares correctamente', () => {
    const moreProducts = [
      {
        id: "1",
        brand: "Apple",
        name: "iPhone 12",
        basePrice: 909,
        imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
      },
      {
        id: "2",
        brand: "Samsung",
        name: "Galaxy S21",
        basePrice: 799,
        imageUrl: "https://www.samsung.com/etc/designs/samsung/images/logo.png"
      }
    ];

    render(<Carousel similarProducts={moreProducts} />);
    expect(screen.getByText("IPHONE 12")).toBeInTheDocument();
    expect(screen.getByText("GALAXY S21")).toBeInTheDocument();
  });
});
