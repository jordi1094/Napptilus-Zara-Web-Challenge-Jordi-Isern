"use client"
import styles from "./index.module.css";
import SearchWrapper from "../SearchWrapper";
import ProductGrid from "../ProductsGrid";
import Header from "@/components/header/header";
import logic from "@/logic/index";
import {useDebounce} from "../../../hooks/useDebounce"
import {useEffect, useState } from "react";


export default function Home({defaultProductList}) {
  const [productsList, setProdcutsList] = useState(defaultProductList || [])
  const [searchQuery, setSearchQuery] = useState("")
  const searchValue = useDebounce(searchQuery, 100)
  
  useEffect(() => {
    const getProducts = async () => {
      
      const products = await logic.getProductsList(searchValue)
      setProdcutsList(products)

    }
    getProducts()
  },[searchValue])

  return (
    <div className={styles.page}>
      <Header/> 
      <SearchWrapper numOfPoducts={productsList.length} onSearch={setSearchQuery}/>
      {productsList.length > 0 ?
      <ProductGrid productsList={productsList} />: <></>
      }

    </div>
  );
}
