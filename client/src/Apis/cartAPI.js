import { api } from "./configs/ApiConfigs";

export const CartAPI = {
  create: async () => {
    const response = await api.request({
      url: "/cart/addCart",
      method: "POST",
    });
    return response;
  },
  addPlantToCart: async (cartId, plantId, quantity,size) => {
    const response = await api.request({
      url: "/cart/addPlantToCart",
      method: "POST",
      data: { cartId: cartId, plantId: plantId, quantity: quantity, size:size },
    });
    return response;
  },
};
