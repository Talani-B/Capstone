import { useState, useEffect } from "react"
import { fetchAllProducts } from '../API'
import ProductCard from "../components/ProductCard"
import NewProductForm from "./NewProductForm"

export default function AllProducts() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    async function fetchData() {
        const data = await fetchAllProducts()
        setProducts(data)
        setFilteredProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const search = e.target.value
        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredProducts(filteredProducts)
    }
    return (
        <>
            <NewProductForm fetchAllProducts={fetchData} />
            <section>
                <h1> All Products</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input onChange={handleSubmit} type="text" id="search" />
                </form>
                <main>
                    {
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                fetchAllProducts={fetchData}
                            />
                        ))
                    }
                </main>
            </section>
        </>
    )
}