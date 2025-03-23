import { render, screen } from '@testing-library/react';
import SimilarProducts from './index';

jest.mock('./components/Carousel', () => {
  return function DummyCarousel({ similarProducts }) {
    return (
      <div>
        {similarProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    );
  };
});

describe('SimilarProducts', () => {
  const similarProducts = [
    {
      id: "1",
      brand: "Apple",
      name: "iPhone 12",
      basePrice: 909,
      imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
    }
  ];

  test('debería renderizar el título en mayúsculas', () => {
    render(<SimilarProducts similarProducts={similarProducts} />);
    const title = screen.getByText('SIMILAR ITEMS');
    expect(title).toBeInTheDocument();
  });

  test('debería renderizar los productos similares correctamente', () => {
    render(<SimilarProducts similarProducts={similarProducts} />);
    const productName = screen.getByText(similarProducts[0].name);
    expect(productName).toBeInTheDocument();
  });
});
