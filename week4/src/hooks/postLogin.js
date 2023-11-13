import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const postLogin = async (request) => {
  await axios.post(`${BASE_URL}/sign-in`, request).then((res) => {
    console.log(res);
  });
};

export default postLogin;
