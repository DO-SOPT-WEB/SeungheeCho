import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import postSignUp from "../api/postSignUp";
import getIdCheck from "../api/getIdCheck";
import Buttons from "../components/Buttons";

const SignUp = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const [isExist, setExist] = useState("black");

  const navigate = useNavigate();

  const btnInfo = [
    {
      name: "회원가입",
      clickAction: function () {
        postSignUp(
          {
            username: ID,
            password: PW,
            nickname,
          },
          navigate
        );
      },
      disabled:
        ID === "" || PW === "" || nickname === "" || isExist !== "green",
    },
  ];

  useEffect(() => {
    setExist("black");
  }, [ID]);

  return (
    <Layout title="Sign Up" buttons={Buttons(btnInfo)}>
      <InputContainer>
        <label htmlFor="id">ID</label>
        <div>
          <input
            type="text"
            id="id"
            value={ID}
            onChange={(e) => setId(e.target.value)}
          />
          <CheckBtn
            type="button"
            onClick={function () {
              getIdCheck({ ID, setExist });
            }}
            $isExist={isExist}>
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
