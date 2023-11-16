import axios from "axios";

// 회원가입 API
const postSignUp = async (request, navigate) => {
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}`, request);
    navigate("/login");
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default postSignUp;
