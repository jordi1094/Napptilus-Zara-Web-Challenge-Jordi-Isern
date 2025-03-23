import { render, screen, waitFor } from '@testing-library/react';
import Details from './page';
import * as logic from '@/logic/index'; 
import Header from '@/components/header/header';
import BackButtonFrame from './components/BackButtonFrame';
import ProducInfoAndDetails from './components/ProductInfoAndDetails';
import ProductSpecsFrame from './components/ProducsSpecs';
import SimilarProducts from './components/similar-products';

jest.mock('@/components/header/header', () => () => <div>Header</div>);
jest.mock('./components/BackButtonFrame', () => () => <div>BackButtonFrame</div>);
jest.mock('./components/ProductInfoAndDetails', () => ({ product }) => <div>{product.name}</div>);
jest.mock('./components/ProducsSpecs', () => ({ specs }) => <div>{specs}</div>);
jest.mock('./components/similar-products', () => ({ similarProducts }) => <div>{similarProducts.length} Similar Products</div>);

jest.mock('@/logic/index', () => ({
  getProductDetails: jest.fn(),
}));

describe('Details', () => {
  it('should render product details page', async () => {
    const mockProduct = {
      id: '1',
      name: 'Test Product',
      specs: 'Test Specs',
      similarProducts: [{ id: '2', name: 'Similar Product 1' }, { id: '3', name: 'Similar Product 2' }],
    };

    logic.getProductDetails.mockResolvedValue(mockProduct);

    const mockParams = { id: '1' };
    render(<Details params={mockParams} />);

    await waitFor(() =>{ 
        expect(logic.getProductDetails).toHaveBeenCalledWith(mockParams.id)
    });

    
    
  });
});
