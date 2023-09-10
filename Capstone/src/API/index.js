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

export async function createNewProduct(product) {
    try{ const response = await fetch(
        `${API_URL}/products`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        }
    );
    const result = await response.json();
    console.log(result);
    } catch (err) {
        console.error(err);
    }
       
}
   
export async function deleteProduct(id) {
    await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
    });
}