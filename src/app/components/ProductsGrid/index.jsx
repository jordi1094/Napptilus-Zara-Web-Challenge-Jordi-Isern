import ProductCard from "./components/ProductCard";
import style from "./index.module.css";

export default function ProductGrid({ productsList }) {
  return (
    <div className={style.grid} role="grid">
      {productsList.map((product, index) => {
        return (
          <ProductCard
            key={index}
            product={product}
            data-testid="product-card"
          />
        );
      })}
    </div>
  );
}
