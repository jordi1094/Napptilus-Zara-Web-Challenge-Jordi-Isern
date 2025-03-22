import data from "@/data";

export default function getQuantityOfProducts() {
  const products = data.get("cart");

  return products.length;
}
