import data from "@/data";

export default function deleteProduct(index) {
  const dataRevived = data.get("cart");

  dataRevived.splice(index, 1);

  data.save(dataRevived, "cart");
}
