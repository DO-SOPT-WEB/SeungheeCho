import axios from "axios";
import { atom, selector } from "recoil";

export const idState = atom({
  key: "idState",
  default: "",
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "",
});

export const getUserInfoQuery = selector({
  key: "getUserInfoQuery",
  get: async ({ get }) => {
    console.log("get 실행");
    try {
      const res = await axios.get("http://3.39.54.196/api/v1/members/300");
      const userInfo = res.data;
      return userInfo;
    } catch (err) {
      console.error(err);
    }
  },
});
