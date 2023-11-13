import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>헤더</h1>
        </Header>
        <Content>
          <InputContainer>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="pw">PASSWORD</label>
            <input type="text" id="pw" />
          </InputContainer>
        </Content>
        <Buttons>
          <button type="button">버튼1</button>
          <button type="button">버튼2</button>
        </Buttons>
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

  width: 50%;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
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
    padding: 0.3rem;

    border-radius: 0.5rem;
    border: 0;
  }
`;
