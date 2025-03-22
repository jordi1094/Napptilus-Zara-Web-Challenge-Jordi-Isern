import HomeView from "./components/HomeView"
import logic from "@/logic"
export default async function HomePage () {
  const products = await logic.getProductsList()
  return (
    <HomeView defaultProductList={products}/>
  )
}