import axios from "axios";
import { useEffect, useState } from "react";

// 사용자 정보 조회 API
const useGetUserInfo = (memberId) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    try {
      const res = axios.get(`${import.meta.env.VITE_BASE_URL}/${memberId}`);
      setResponse(res.data);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  }, []);

  return response;
};

export default useGetUserInfo;
