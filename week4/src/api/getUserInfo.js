import axios from "axios";

const getUserInfo = async (memberId) => {
  await axios
    .get(`${import.meta.env.VITE_BASE_URL}/${memberId}`)
    .then((res) => {
      console.log(res);
    });
};

export default getUserInfo;
