const API_URL = 'https://fakestoreapi.com/products';

export async function fetchAllProducts() {
    try {
        const response = await fetch(
            `${API_URL}/products`
        );
        const result = await response.json();
        return result.data.products;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchProductById(id) {
   try { 
    const response = await fetch(
   
    `${API_URL}/product/${1}`
    );
    const result = await response.json();
    console.log(result);
} catch (err) {
    console.error(err);
}
}