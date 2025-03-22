"use client";
import styles from "./SingleStorageSelector.module.css";

export default function SingleStorageSelector({
  storage,
  selectedStorage,
  onClick,
}) {
  let status = false;
  if (selectedStorage && selectedStorage.capacity === storage.capacity) {
    status = true;
  }

  return (
    <div
      onClick={onClick}
      className={status ? styles.selected : styles.unselected}
    >
      <h6 className={styles.text}>{storage.capacity}</h6>
    </div>
  );
}
