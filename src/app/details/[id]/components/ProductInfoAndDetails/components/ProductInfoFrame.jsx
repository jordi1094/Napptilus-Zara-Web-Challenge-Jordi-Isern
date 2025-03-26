import style from "./ProductInfoFrame.module.css";

export default function ProductInfoFrame({ product, selectedStorage }) {
  return (
    <div className={style.titleAndPrice}>
      <h4 className={style.title}>{product.name.toUpperCase()}</h4>
      {selectedStorage ? (
        <h4 className={style.price}>{`${selectedStorage.price} EUR`}</h4>
      ) : (
        <h4 className={style.price}>{`FROM ${product.basePrice} EUR`}</h4>
      )}
    </div>
  );
}
