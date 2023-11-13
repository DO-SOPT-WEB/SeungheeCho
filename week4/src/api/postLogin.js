import axios from "axios";

const postLogin = async (request) => {
  await axios
    .post(`${import.meta.env.VITE_BASE_URL}/sign-in`, request)
    .then((res) => {
      console.log(res);
    });
};

export default postLogin;
