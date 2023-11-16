import axios from "axios";

// 로그인 API
async function postLogin(username, password, navigate) {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
      username,
      password,
    });
    navigate(`/mypage/${res.data.id}`);
  } catch {
    (err) => {
      console.log(err);
    };
  }
}

export default postLogin;
