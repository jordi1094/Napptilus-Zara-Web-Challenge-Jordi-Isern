import Image from "next/image"
import styles from "./product-card.module.css"

export default function ProductCard({product}) {
    return(
        <div>
            <Image width={300} height={300} src={product.imageUrl} alt={`Image from the phone ${product.name}`}/>
            <p>{product.name}</p>
            <p>{product.id}</p>
        </div>
    )
}