import axios from 'axios';

export const getStockProducts = async () => {
  try {
    const { data } = await axios.get(`/farmers/products`);
    const [products] = data.products;
    return products.products;
  } catch (err) {
    return err.message;
  }
};

export const removeProduct = async (id) => {
  const url = `/farmers/products/${id}`;
  return axios.delete(url).catch((error) => console.log('Error deleting product', error.response.data));
};

export const getAll = () => {
  return axios.get('/farmers');
};

export const loadFarmerPublicProfileData = async (id) => {
  try {
    const { data } = await axios.get(`/farmers/farmer/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};
