import { render, screen, fireEvent } from '@testing-library/react';
import ProducInfoAndDetails from './index';

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

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('ProducInfoAndDetails', () => {
  const product ={
    "id": "SMG-A25",
    "brand": "Samsung",
    "name": "Galaxy A25 5G",
    "description": "El Samsung Galaxy A25 5G es un smartphone de gama media con una pantalla FHD+ de 6.5 pulgadas, procesador Exynos 1280 Octa-Core, y una potente batería de 5000mAh, ofreciendo un rendimiento equilibrado y una experiencia 5G asequible.",
    "basePrice": 239,
    "rating": 4.3,
    "specs": {
      "screen": "6.5\" FHD+",
      "resolution": "1080 x 2340 pixels",
      "processor": "Samsung Exynos 1280 Octa-Core",
      "mainCamera": "50 MP (F1.8) Principal, OIS + 8 MP (F2.2) Ultra gran angular + 2 MP (F2.4) Macro",
      "selfieCamera": "13 MP",
      "battery": "5000 mAh",
      "os": "Android 14",
      "screenRefreshRate": "120 Hz"
    },
    "colorOptions": [
      {
        "name": "Negro",
        "hexCode": "#000000",
        "imageUrl": "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png"
      },
      {
        "name": "Azul",
        "hexCode": "#0000FF",
        "imageUrl": "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-azul.png"
      }
    ],
    "storageOptions": [
      {
        "capacity": "128 GB",
        "price": 219
      }
    ],
    "similarProducts": [
      {
        "id": "APL-IP13-128",
        "brand": "Apple",
        "name": "iPhone 13",
        "basePrice": 619,
        "imageUrl": "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png"
      },
      {
        "id": "OPP-R11F",
        "brand": "OPPO",
        "name": "Reno 11 F",
        "basePrice": 269,
        "imageUrl": "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.png"
      }
    ]
  }

  test('debería renderizar el nombre del producto y los componentes hijos', () => {
    render(<ProducInfoAndDetails product={product} />);
    expect(screen.getByText("GALAXY A25 5G")).toBeInTheDocument();
    expect(screen.getByRole("StorageSelectorButton")).toBeInTheDocument()
  });

  test('debería mostrar la imagen correcta según el color seleccionado', () => {
    render(<ProducInfoAndDetails product={product} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', product.colorOptions[0].imageUrl);
    fireEvent.click(screen.getByTestId(product.colorOptions[1].hexCode));
    expect(image).toHaveAttribute('src', product.colorOptions[1].imageUrl);
  });

  test('debería pasar los valores seleccionados al componente AddToCartButton', () => {
    render(<ProducInfoAndDetails product={product} />);
    fireEvent.click(screen.getByTestId(product.colorOptions[1].hexCode));
    fireEvent.click(screen.getByText('128 GB'));
    expect(screen.getByText('AÑADIR')).toBeInTheDocument();
  });

  test('debería renderizar los selectores de almacenamiento y color', () => {
    render(<ProducInfoAndDetails product={product} />);
    expect(screen.getByText('128 GB')).toBeInTheDocument();
    expect(screen.getAllByTestId(product.colorOptions[0].hexCode))
  });
});
