"use client";
import Image from "next/image";
import styles from "./index.module.css";
import cross from "@/assets/icons/cross.svg";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function clearInputValue() {
    setInputValue("");
    onSearch("");
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  }

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Search for a smartphone..."
      />
      <Image
        onClick={clearInputValue}
        className={styles.cross}
        src={cross}
        alt="Cross icon to clear the input"
      />
    </div>
  );
}
