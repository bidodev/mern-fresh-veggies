import axios from 'axios';

export const getStockProducts = async () => {
  try {
    const { data } = await axios.get(`/farmers/products`);
    const [products] = data.products;
    return products.products;
  } catch (err: any) {
    return err.message;
  }
};

export const removeProduct = async (id: string) => {
  const url = `/farmers/products/${id}`;
  return axios.delete(url).catch((error: any) => console.log('Error deleting product', error.response.data));
};

export const getAll = () => {
  return axios.get('/farmers');
};

export const loadFarmerPublicProfileData = async (slug: string) => {
  try {
    const { data } = await axios.get(`/farmers/farmer/${slug}`);
    return data;
  } catch (err: any) {
    return err;
  }
};

export const loadAllFarmersProfile = async () => {
  try {
    const { data } = await axios.get(`/farmers`);
    return data;
  } catch (err: any) {
    return err;
  }

};

export const loadAdminPanelData = async () => {
  try {
    const { data } = await axios.get(`/farmers/admin/panel`);
    return data;
  } catch (err: any) {
    return err;
  }

};
