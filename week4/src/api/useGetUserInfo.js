import axios from "axios";
import { useEffect, useState } from "react";

const useGetUserInfo = (memberId) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/${memberId}`).then((res) => {
      setResponse(res.data);
    });
  }, []);

  return response;
};

export default useGetUserInfo;
