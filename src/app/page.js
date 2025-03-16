import styles from "./page.module.css";
import SearchWrapper from "./components/search-wrapper/search-wrapper.component";
import ProductGrid from "./components/products-grid/product-grid.component";
import logic from "@/logic/index"


export default async function Home() {
  let productsList = await logic.getProductsList()
  return (
    <div>
      <SearchWrapper />
      <ProductGrid productsList={productsList} />
    </div>
  );
}
