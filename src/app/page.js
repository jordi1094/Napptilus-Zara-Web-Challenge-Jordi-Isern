"use client"
import styles from "./page.module.css";
import SearchWrapper from "./components/search-wrapper/search-wrapper.component";
import ProductGrid from "./components/products-grid/product-grid.component";
import Header from "@/components/header/header.component";
import logic from "@/logic/index"
import { useEffect, useState } from "react";


export default function Home() {
  const [productsList, setProdcutsList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  
  useEffect(() => {
    const getProducts = async () => {
      console.log(searchQuery)
      const products = await logic.getProductsList(searchQuery)

      setProdcutsList(products)
    }
    getProducts()
  },[searchQuery])

  return (
    <div>
      <Header/> 
      <SearchWrapper numOfPoducts={productsList.length} onSearch={setSearchQuery}/>
      <ProductGrid productsList={productsList} />
    </div>
  );
}
