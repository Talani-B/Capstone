import SingleProduct from "../pages/SingleProduct";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${API_URL}`);
    const AllProducts = await response.json();
    console.log(AllProducts);
    return AllProducts;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`
        ${API_URL}/${id}`);
    const productById = await response.json();
    console.log(productById);
    return productById;
  } catch (err) {
    console.error(err);
  }
}
export async function fetchCategory() {
  try {
    const response = await fetch(`
        ${API_URL}/products/category/${category}`);
    const Categories = await response.json();
    console.log(Categories);
    return Categories;
  } catch (err) {
    console.error(err);
  }
}

export async function addNewProduct() {
  try {
    const response = await fetch(`${API_URL}/products}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
    const NewProduct = await response.json();
    return NewProduct;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduct() {
  try {
    const response = await fetch(
      `
        ${API_URL}/products/6`,
      {
        method: "DELETE",
      }
    );
    const removeProduct = await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}
// register user 
export async function registerUser(firstname,lastname, username, password,email) {
  try {
    const response = await fetch(
      `
        ${API_URL}/users`,
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            email: email,
          }
        }),
      }
    );
    const result = await response.json();
    console.log(result.token);
    return result.token;
  } catch (error) {
    console.error(err);
  }
}

export async function loginFunction(username, password) {
  try {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
    const result = await response.json();
    console.log(result.token);
    return result.token;
  } catch (error) {
   console.error(error);
  }
}

//Add new user
export async function addNewUser() {
 {
  try {
    const response = await fetch(`https://fakestoreapi.com/users`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: "san Antonio",
          street: "adams St",
          number: 245,
          zipcode: "80796-1234",
          geolocation: {
            lat: "40.3467",
            long: "-40.1310",
          },
        },
        phone: "1-765-789-6734",
      }),
    });
    const result = await response.json();
    console.log("result from register: ", result);
    return result;
  } catch (error) {
    setError(error);
  }
}
}

export async function fetchCart() {
  try {
    const response = await fetch(`
        ${API_URL}/carts`);
    const Cart = await response.json();
    console.log(Cart);
    return Cart;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchSingleCart() {
  try {
    const response = await fetch(`
            ${API_URL}/carts/5`);
    const singleCart = await response.json();
    console.log(singleCart);
    return singleCart;
  } catch (err) {
    console.error(err);
  }
}

export async function addToCart(product) {
  try {
    const response = await fetch(`${API_URL}/carts`);
    {
      const addProduct = await response.json();
      console.log(addProduct);
    }
    return addProduct;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteFromCart() {
  try {
    const response = await fetch(`${API_URL}/carts/6`);
    const removeFromCart = await response.json();
    console.log(removeFromCart);
    return removeFromCart;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser ()  {
  try {
    const response = await fetch(`${API_URL}/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: 'donero',
        password: 'ewedon',
      }),
    });
    const result = await response.json();
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export async function singleUser() {
  try {
    const response = await fetch(`${API_URL}/users/1`);
    const user = await response.json(token);
    console.log(user.token);
  } catch (err) {
    console.error(err);
  }
}
