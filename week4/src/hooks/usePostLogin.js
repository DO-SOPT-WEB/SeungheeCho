import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const usePostLogin = () => {
  axios
    .post(`${BASE_URL}/sign-in`, {
      username: "lydia1",
      password: "0804",
    })
    .then((res) => {
      console.log(res);
    });
};

export default usePostLogin;
