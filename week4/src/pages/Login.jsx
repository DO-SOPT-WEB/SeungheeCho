import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import postLogin from "../api/postLogin";
import Buttons from "../components/Buttons";
import InputContainer from "../components/InputContainer";
import { createPortal } from "react-dom";
import styled from "styled-components";

// 로그인 컴포넌트 (페이지)
const Login = () => {
  const [ID, setId] = useState("");
  const [PW, setPw] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const btnInfo = [
    {
      name: "로그인",
      clickAction: function () {
        postLogin(ID, PW, navigate, setModalOpen, setErrMsg);
      },
    },
    {
      name: "회원가입",
      clickAction: function () {
        navigate("/signup");
      },
    },
  ];

  return (
    <Layout title="Login" buttons={Buttons(btnInfo)}>
      <InputContainer name="ID" state={ID} setState={setId} />
      <InputContainer name="PASSWORD" state={PW} setState={setPw} />
      {modalOpen &&
        createPortal(
          <Modal>{errMsg}</Modal>,
          document.querySelectorAll(".top")[0]
        )}
    </Layout>
  );
};

export default Login;

const Modal = styled.section`
  text-align: center;

  position: absolute;
  bottom: 7rem;
  padding: 1rem;

  font-size: 1.3rem;
  font-weight: 600;

  border-radius: 0.7rem;
  border: 0;
  box-shadow: 0 0 0.3rem red;
  background-color: #ffd0d0;
`;
