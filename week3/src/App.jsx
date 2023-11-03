import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import styled from "styled-components";
import PickMenu from "./components/PickMenu";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <ContentWrapper>
          <Onboarding />
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 60%;
  height: 60%;
  padding: 3rem;

  background-color: pink;
`;
