import axios from "axios";
import modalToggle from "../utils/modalToggle";

// 로그인 API
async function postLogin(
  username,
  password,
  navigate,
  setModalOpen,
  setErrMsg
) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
      username,
      password,
    });
    navigate(`/mypage/${res.data.id}`);
  } catch (err) {
    setErrMsg(err.response.data.message);
    modalToggle(setModalOpen);
  }
}

export default postLogin;
