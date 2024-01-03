import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import styled from "styled-components";
import PickMenu from "./components/PickMenu";
import ResultMenu from "./components/ResultMenu";

import { useReducer, useState } from "react";
import RandomMenu from "./components/RandomMenu";

function App() {
  // 추천 방식 state
  const [howPick, setHowPick] = useState("");
  // 각 step별 선택한 답변idx 배열 state
  const [choice, setChoice] = useState(new Array(3));

  // 선택 단계 step state를 관리하는 useReducer
  const reducer = (step, action) => {
    switch (action.type) {
      case "GO_BACK":
        return -1;
      case "START_PICK":
        return 0;
      case "START_RANDOM":
        return 4;
      case "PREV":
        return step - 1;
      case "NEXT":
        return step + 1;
      case "GO_RESULT":
        return 3;
    }
  };

  const [step, dispatch] = useReducer(reducer, -1);

  return (
    <>
      <Wrapper>
        <Header
          dispatch={dispatch}
          howPick={howPick}
          setHowPick={setHowPick}
          setChoice={setChoice}
        />
        <ContentWrapper>
          {step === -1 ? (
            <Onboarding
              howPick={howPick}
              setHowPick={setHowPick}
              dispatch={dispatch}
            />
          ) : step === 4 ? (
            <RandomMenu setChoice={setChoice} dispatch={dispatch} />
          ) : step === choice.length ? (
            <ResultMenu
              choice={choice}
              setChoice={setChoice}
              dispatch={dispatch}
            />
          ) : (
            <PickMenu
              step={step}
              dispatch={dispatch}
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
