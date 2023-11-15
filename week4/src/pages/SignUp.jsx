import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

//사용자 정보 조회GET으로 중복체크 (isExist = 성공:true, 실패:false)
//ID input 값이 바뀜에 따라 isExist 초기화
//회원가입POST로 가입, 성공 시 /login 이동
//회원가입 에러 처리 (단순 alert)

const SignUp = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const [isExist, setExist] = useState("black");

  const navigate = useNavigate();

  const postSignUp = async (request) => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}`, request)
      .then((res) => {
        navigate("/login");
      });
  };

  // 중복체크
  const checkDouble = async () => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
        username: ID,
        password: "",
      })
      .then((res) => {
        console.log("성공 : ", res);
      })
      .catch((err) => {
        if (err.response.data.message === "비밀번호가 일치하지 않습니다.")
          setExist("red");
        else if (err.response.data.message === "사용자가 존재하지 않습니다.")
          setExist("green");
      });
  };

  const buttons = (
    <Buttons>
      <button
        type="submit"
        onClick={() => {
          postSignUp({
            username: ID,
            password: PW,
            nickname,
          });
        }}
        disabled={
          ID === "" || PW === "" || nickname === "" || isExist !== "green"
        }>
        회원가입
      </button>
    </Buttons>
  );

  useEffect(() => {
    setExist("black");
  }, [ID]);

  return (
    <Layout title="Sign Up" buttons={buttons}>
      <InputContainer>
        <label htmlFor="id">ID</label>
        <div>
          <input
            type="text"
            id="id"
            value={ID}
            onChange={(e) => setId(e.target.value)}
          />
          <CheckBtn type="button" onClick={checkDouble} $isExist={isExist}>
            중복체크
          </CheckBtn>
        </div>
      </InputContainer>
      <InputContainer>
        <label htmlFor="pw">비밀번호</label>
        <input
          type="text"
          id="pw"
          value={PW}
          onChange={(e) => setPw(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="pwCheck">비밀번호 확인</label>
        <input
          type="text"
          id="pwCheck"
          value={pwCheck}
          onChange={(e) => setPwCheck(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputContainer>
    </Layout>
  );
};

export default SignUp;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto 20rem;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;

  & input {
    height: 2rem;

    font-size: 1.2rem;

    border-radius: 0.3rem;
    border: 0;
  }

  & > div {
    display: flex;
    gap: 1rem;

    width: 100%;
  }
`;
const CheckBtn = styled.button`
  width: 100%;
  color: white;
  background-color: ${({ $isExist }) => $isExist};
  border: 0;
  border-radius: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  & > button {
    font-size: 1.3rem;
    padding: 0.5rem;

    border-radius: 0.5rem;
    border: 0;
  }
`;
