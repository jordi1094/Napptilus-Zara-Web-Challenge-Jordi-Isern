import style from "./carousel.module.css";
import ProductCard from "@/app/components/ProductsGrid/components/ProductCard";

export default function Carousel({ similarProducts }) {
  return (
    <div
      className={style.carouselContainer}
      style={{ gridTemplateColumns: `repeat(${similarProducts.length}, auto)` }}
    >
      <div className={style.carousel}>
        {similarProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
