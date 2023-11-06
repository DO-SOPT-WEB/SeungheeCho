import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import styled from "styled-components";
import PickMenu from "./components/PickMenu";
import ResultMenu from "./components/ResultMenu";

import { useState } from "react";
import RandomMenu from "./components/RandomMenu";

function App() {
  // 추천 방식 state
  const [howPick, setHowPick] = useState("");
  // 선택 단계 state (-1 : 추천방식 선택 페이지)
  const [step, setStep] = useState(-1);
  // 각 step별 선택한 답변idx 배열 state
  const [choice, setChoice] = useState(new Array(3));

  return (
    <>
      <Wrapper>
        <Header />
        <ContentWrapper>
          {step === -1 ? (
            <Onboarding
              howPick={howPick}
              setHowPick={setHowPick}
              setStep={setStep}
            />
          ) : step === 4 ? (
            <RandomMenu setChoice={setChoice} setStep={setStep} />
          ) : step === choice.length ? (
            <ResultMenu
              choice={choice}
              setChoice={setChoice}
              setStep={setStep}
            />
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

  background-color: ${({ theme }) => theme.colors.black};
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

  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;

  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.white};
`;
