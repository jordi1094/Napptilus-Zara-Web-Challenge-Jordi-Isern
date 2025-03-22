"use client";
import styles from "./page.module.css";
import SearchWrapper from "./components/SearchWrapper";
import ProductGrid from "./components/ProductsGrid";
import Header from "@/components/header/header";
import logic from "@/logic/index";
import { useDebounce } from "@/hooks/useDebounce";
import { useDebugValue, useEffect, useState } from "react";

export default function Home() {
  const [productsList, setProdcutsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchValue = useDebounce(searchQuery, 100);

  useEffect(() => {
    const getProducts = async () => {
      const products = await logic.getProductsList(searchValue);

      setProdcutsList(products);
    };
    getProducts();
  }, [searchValue]);

  return (
    <div className={styles.page}>
      <Header />
      <SearchWrapper
        numOfPoducts={productsList.length}
        onSearch={setSearchQuery}
      />
      <ProductGrid productsList={productsList} />
    </div>
  );
}
