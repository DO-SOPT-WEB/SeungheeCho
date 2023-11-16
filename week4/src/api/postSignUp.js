import axios from "axios";

const postSignUp = async (request, navigate) => {
  await axios.post(`${import.meta.env.VITE_BASE_URL}`, request).then(() => {
    navigate("/login");
  });
};

export default postSignUp;
