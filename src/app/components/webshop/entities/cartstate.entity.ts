import { Product } from './product.entity';

export interface CartState {
  loaded: boolean;
  products: Product[];
}
