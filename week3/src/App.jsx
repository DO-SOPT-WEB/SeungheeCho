import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Onboarding />
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
