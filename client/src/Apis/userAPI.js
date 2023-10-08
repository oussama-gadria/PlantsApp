import axios from "axios";
import { api } from "./configs/ApiConfigs";

export const UserApi = {
  create: async (userInfo) => {
    const { response } = await api.request({
      url: "/user/addUser",
      method: "POST",
      data: userInfo,
    });
    return response;
  },

  signIn: async (email, password) => {
    const response = await api.request({
      url: "/user/SignIn",
      method: "POST",
      data: { email: email, password: password },
    });
    return response;
  },

  sendEmailToCustomer: async (mailSubject, mailMessage) => {
    await axios.post("http://localhost:5000/user/sendEmail", {
      mailMessage: mailMessage,
      mailSubject: mailSubject,
    });
  },
};
