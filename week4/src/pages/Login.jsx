import styled from "styled-components";
import Layout from "../components/Layout";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

// 로그인 성공 시 반환받은 id로 /mypage/:userId
// 로그인 에러 처리
// 회원가입 클릭 시 /signup 이동

const Login = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");

  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 login 통신

  const postLogin = async () => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/sign-in`, {
        username: ID,
        password: PW,
      })
      .then((res) => {
        navigate(`/mypage/${res.data.id}`);
      });
  };

  const buttons = (
    <Buttons>
      <button
        type="submit"
        onClick={() => {
          postLogin();
        }}>
        로그인
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/signup");
        }}>
        회원가입
      </button>
    </Buttons>
  );

  return (
    <Layout title="Login" buttons={buttons}>
      <InputContainer>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          value={ID}
          onChange={(e) => setId(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="pw">PASSWORD</label>
        <input
          type="text"
          id="pw"
          value={PW}
          onChange={(e) => setPw(e.target.value)}
        />
      </InputContainer>
    </Layout>
  );
};

export default Login;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;

  & > input {
    width: 70%;
    height: 2rem;

    font-size: 1.2rem;

    border-radius: 0.3rem;
    border: 0;
  }
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
