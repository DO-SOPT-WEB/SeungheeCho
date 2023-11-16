import styled from "styled-components";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import postSignUp from "../api/postSignUp";
import getIdCheck from "../api/getIdCheck";
import Buttons from "../components/Buttons";
import InputContainer from "../components/InputContainer";

// 회원가입 컴포넌트 (페이지)
const SignUp = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const [isExist, setExist] = useState("default");

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
        ID === "" || PW === "" || nickname === "" || isExist !== "false",
    },
  ];

  useEffect(() => {
    setExist("default");
  }, [ID]);

  return (
    <Layout title="Sign Up" buttons={Buttons(btnInfo)}>
      <InputContainer custom={true}>
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
      <InputContainer name="비밀번호" state={PW} setState={setPw} />
      <InputContainer
        name="비밀번호 확인"
        state={pwCheck}
        setState={setPwCheck}
      />
      <InputContainer name="닉네임" state={nickname} setState={setNickname} />
    </Layout>
  );
};

export default SignUp;

const CheckBtn = styled.button`
  width: 100%;
  color: white;
  background-color: ${({ $isExist, theme }) =>
    $isExist === "default"
      ? theme.colors.black
      : $isExist === "true"
      ? "red"
      : "green"};
  border: 0;
  border-radius: 0.5rem;

  cursor: pointer;

  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.colors.gray};
  }
`;
