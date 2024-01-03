import axios from "axios";

// ID 중복체크 API
const getIdCheck = async ({ ID, setExist }) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/check?username=${ID}`
    );
    res.data.isExist ? setExist("true") : setExist("false");
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

export default getIdCheck;
