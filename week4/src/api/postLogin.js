import axios from "axios";

async function postLogin(username, password, navigate) {
  await axios
    .post(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
      username,
      password,
    })
    .then((res) => {
      console.log(res);
      navigate(`/mypage/${res.data.id}`);
    });
}

export default postLogin;
