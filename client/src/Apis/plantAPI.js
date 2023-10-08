import { api } from "./configs/ApiConfigs";

export const PlantApi = {
  filter: (filterObject) => {
    const response = api.request({
      url: "/plant/filter",
      method: "POST",
      data: filterObject,
    });
    return response;
  },
};
