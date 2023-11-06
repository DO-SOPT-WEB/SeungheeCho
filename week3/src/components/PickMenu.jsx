import styled from "styled-components";

const PickMenu = ({ step, setStep, choice, setChoice }) => {
  const CHOICE = [
    ["아우터", "상의", "하의", "세트", "백&슈즈"],
    ["여름", "봄/가을", "겨울"],
    ["무채색", "컬러풀"],
  ];

  return (
    <>
      <Header>
        <h2>CATEGORY</h2>
      </Header>
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
          onClick={() => setStep(step - 1)}
          disabled={step === 0}>
          이전으로
        </button>
        <button
          type="button"
          onClick={() => setStep(step + 1)}
          disabled={choice[step] === undefined}>
          {step === CHOICE.length - 1 ? "결과보기" : "다음으로"}
        </button>
      </Buttons>
    </>
  );
};

export default PickMenu;

const Header = styled.header`
  position: absolute;
  top: 0;
  margin-top: 2rem;

  font-size: 1.8rem;
  font-weight: bold;

  ${({ theme }) => theme.fonts.eng};
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

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;

  & > button {
    width: 5rem;
    height: 1.5rem;

    border-radius: 0.5rem;
    border: 0;

    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      border: 0.2rem solid ${({ theme }) => theme.colors.black};
    }
    &:disabled {
      border: 0;
    }
  }
`;
