import styles from "./page.module.css";
import SearchWrapper from "./components/search-wrapper/search-wrapper.component";
import ProductGrid from "./components/products-grid/product-grid.component";

export default function Home() {

  return (
    <div>
      <SearchWrapper/>
      <ProductGrid/>
    </div>
  );
}
