export default async function getProductsList (searchQuery) {
    try {
        const url = new URL(`https://prueba-tecnica-api-tienda-moviles.onrender.com/products`)
        url.searchParams.append("limit", "20")
        
        if(searchQuery){
            url.searchParams.append("search", searchQuery)
        }
        const response = await fetch(url, {
                headers:{
                    "accept": "application/json",
                    "x-api-key": "87909682e6cd74208f41a6ef39fe4191"
                }
            })
        if (response.status !== 200) {
            throw new Error(`Error ${response.status} : ${response.message} `)
        }
        const productsList = await response.json()
        return productsList
        
    }catch(error){
        throw new Error(`Error ${error.message}`)
    }
}
