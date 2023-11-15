import axios from "axios";

const getUserInfo = async (id) => {
  await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`).then((res) => {
    console.log(res);
  });
};

export default getUserInfo;
