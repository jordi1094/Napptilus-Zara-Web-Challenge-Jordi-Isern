import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/details/${product.id}`} className={styles.box}>
      <div className={styles.imageFrame}>
        <Image
          className={`${styles.image} object-contain `}
          fill
          priority="true"
          src={product.imageUrl}
          sizes="(max-width:768px) 100vw, (max-wigth:1200px) 60vw"
          alt={`Image from the phone ${product.name}`}
        />
      </div>
      <div className={styles.infoFrame}>
        <div>
          <h5 className={styles.brandFrame}>{product.brand.toUpperCase()}</h5>
          <h5 className={styles.nameFrame}>{product.name.toUpperCase()}</h5>
        </div>
        <h5 className={styles.priceFrame}>{`${product.basePrice} EUR`}</h5>
      </div>
    </Link>
  );
}
