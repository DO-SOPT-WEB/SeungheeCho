import styled from "styled-components";

// 모달 컴포넌트 (공통)
const Layout = ({ title, buttons, children }) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content>{children}</Content>
        {buttons}
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  width: 40rem;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.gray};
`;

const Header = styled.header`
  & > h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;
