import styled from "styled-components";
import Layout from "../components/Layout";
import usePostLogin from "../hooks/usePostLogin";

// 로그인 성공 시 반환받은 id로 /mypage/:userId
// 로그인 에러 처리
// 회원가입 클릭 시 /signup 이동

const Login = () => {
  const buttons = (
    <Buttons>
      <button type="button" onClick={usePostLogin}>
        로그인
      </button>
      <button type="button">회원가입</button>
    </Buttons>
  );

  return (
    <Layout title="Login" buttons={buttons}>
      <InputContainer>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="pw">PASSWORD</label>
        <input type="text" id="pw" />
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
