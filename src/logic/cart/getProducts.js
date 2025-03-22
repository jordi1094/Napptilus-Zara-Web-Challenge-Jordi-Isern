import data from "@/data";

export default function getProdcuts() {
  const products = data.get("cart");

  return products;
}
