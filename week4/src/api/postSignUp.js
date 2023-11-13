import axios from "axios";

const postSignUp = async (request) => {
  await axios.post(`${import.meta.env.VITE_BASE_URL}`, request).then((res) => {
    console.log(res);
  });
};

export default postSignUp;
