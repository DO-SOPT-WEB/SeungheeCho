import styled from "styled-components";
import Layout from "../components/Layout";
import { Outlet, useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const buttons = (
    <Buttons>
      <button
        type="button"
        onClick={() => {
          navigate("/login");
        }}>
        로그아웃
      </button>
    </Buttons>
  );
  return (
    <Layout title="MY PAGE" buttons={buttons}>
      <Outlet />
    </Layout>
  );
};

export default MyPage;

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
