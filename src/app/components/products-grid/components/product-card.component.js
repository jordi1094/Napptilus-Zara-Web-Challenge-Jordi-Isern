import Image from "next/image"
import styles from "./product-card.module.css"
import Link from "next/link"

export default function ProductCard({product}) {
    return(
        <Link href={`/details/${product.id}`} className={styles.box}>
            <Image className={styles.image} width={300} height={300} src={product.imageUrl} alt={`Image from the phone ${product.name}`}/>
            <div className={styles.infoFrame}>
                <div>
                    <h5 className={styles.brandFrame}>{product.brand.toUpperCase()
                    }</h5>
                    <h5 className={styles.nameFrame}>{product.name.toUpperCase()}</h5>
                </div>
                <h5 className={styles.priceFrame}>{`${product.basePrice} EUR`}</h5>
            </div>
        </Link>
    )
}