export const getAllProducts = async () => {
    try {
    const response = await fetch('https://fakestoreapi.com/products')
    } catch (err) {
        console.error(err)
    }
}