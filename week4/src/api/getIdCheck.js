import axios from "axios";

const getIdCheck = async ({ ID, setExist }) => {
  await axios
    .get(`${import.meta.env.VITE_BASE_URL}/check?username=${ID}`)
    .then((res) => {
      res.data.isExist ? setExist("red") : setExist("green");
    });
};

export default getIdCheck;
