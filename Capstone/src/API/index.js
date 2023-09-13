const API_URL = 'https://fakestoreapi.com/products';

export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}`);
        const AllProducts = await response.json()
       console.log(AllProducts);
        return AllProducts;
    } catch (err) {
        console.error(err);
    }
};
fetchAllProducts();

export async function singleProduct() {
    try {
        const response = await fetch(
            `${API_URL}/${id}`
        );
        const singleProduct = await response.json();
        console.log(singleProduct);
    } catch (err) {
        console.error(err);
    }
};
fetchProductById()

export async function addNewProduct(product) {
    try {
        const response = await fetch(
            `${API_URL}/${productObj}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productObj),
            }
        );
        const NewProduct= await response.json();
        return NewProduct;
    } catch (err) {
        console.error(err);
    }

};

export async function deleteProduct(id) {
    try{
        const repsonse = await fetch(`
        ${API_URL}/products/${productId}`, {
       
            method: 'DELETE',
    });
    const productId = await response.json();
} catch(err) {
    console.error(err);
}
};



