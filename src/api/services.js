import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getProducts() {
  const response = await axios.get(`${BASE_URL}/api/products`);
  return response.data;
}

export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/api/products/${id}`);
  return response.data;
}

export async function deleteProduct(id) {
  await axios.delete(`${BASE_URL}/api/products/${id}`);
}

export async function addProduct(name, price) {
  await axios.post(`${BASE_URL}/api/products`, {
    name,
    price,
  });
}

export async function patchProduct(id, name, price) {
  await axios.patch(`${BASE_URL}/api/products/${id}`, {
    name,
    price,
  });
}
