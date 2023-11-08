import styled from "styled-components";
import Title from "./Layout/Title";
import Buttons from "./Layout/Buttons";

const PickMenu = ({ step, dispatch, choice, setChoice }) => {
  const STEP_TITLE = ["CATEGORY", "SEASON", "COLOR"];
  const CHOICE = [
    ["아우터", "상의", "하의", "세트", "백&슈즈"],
    ["여름", "봄/가을", "겨울"],
    ["무채색", "컬러풀"],
  ];

  return (
    <>
      <Title>{STEP_TITLE[step]}</Title>
      <Step>{step + 1}/3</Step>
      <PickMain>
        <ul>
          {CHOICE[step].map((el, idx) => (
            <PickChoice
              key={el}
              onClick={() => {
                const newChoice = [...choice];
                newChoice[step] = idx;
                setChoice(newChoice);
              }}
              $clicked={choice[step] === idx}>
              {el}
            </PickChoice>
          ))}
        </ul>
      </PickMain>
      <Buttons>
        <button
          type="button"
          onClick={() => dispatch({ type: "PREV" })}
          disabled={step === 0}>
          이전으로
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "NEXT" })}
          disabled={choice[step] === undefined}>
          {step === CHOICE.length - 1 ? "결과보기" : "다음으로"}
        </button>
      </Buttons>
    </>
  );
};

export default PickMenu;

const Step = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3rem;

  font-size: 1.5rem;
`;
const PickMain = styled.section`
  & > ul {
    display: flex;
    justify-content: center;

    gap: 1rem;
    flex-wrap: wrap;
  }
`;
const PickChoice = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7rem;
  height: 7rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid black;
  border-radius: 0.7rem;
  ${(props) => props.$clicked && `box-shadow: 0 0 1rem white;`};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.point};
  }

  ${({ theme }) => theme.fonts.kor};
`;
