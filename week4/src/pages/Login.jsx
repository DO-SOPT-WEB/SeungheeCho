import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import postLogin from "../api/postLogin";

const Login = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");

  const navigate = useNavigate();

  const buttons = (
    <Buttons>
      <button
        type="submit"
        onClick={() => {
          postLogin(ID, PW, navigate);
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
