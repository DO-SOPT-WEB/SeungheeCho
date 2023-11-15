import axios from "axios";
import { useState } from "react";

const usePostLogin = (request) => {
  const [response, setResponse] = useState("");

  axios
    .post(`${import.meta.env.VITE_BASE_URL}/sign-in`, request)
    .then((res) => {
      setResponse(res.data);
      // navigate(`/mypage/${res.data.id}`);
    });

  return response;
};

export default usePostLogin;
