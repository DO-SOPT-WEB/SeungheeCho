import axios from "axios";
import { useEffect, useState } from "react";

// 사용자 정보 조회 API
const useGetUserInfo = (memberId) => {
  const [response, setResponse] = useState("");

  const getUserInfo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/${memberId}`
      );
      setResponse(res.data);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return response;
};

export default useGetUserInfo;
