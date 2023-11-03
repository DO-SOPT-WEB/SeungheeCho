import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import styled from "styled-components";
import PickMenu from "./components/PickMenu";
import ResultMenu from "./components/ResultMenu";

import { useState } from "react";

function App() {
  // 선택 단계 state
  const [step, setStep] = useState(0);
  // 각 step별 선택한 답변idx 배열 state
  const [choice, setChoice] = useState(new Array(3));

  return (
    <>
      <Wrapper>
        <Header />
        <ContentWrapper>
          {step === choice.length ? (
            <ResultMenu />
          ) : (
            <PickMenu
              step={step}
              setStep={setStep}
              choice={choice}
              setChoice={setChoice}
            />
          )}
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
  height: 70%;
  padding: 5rem;

  background-color: pink;
`;
