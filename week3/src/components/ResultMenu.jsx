import styled from "styled-components";
import DATA from "../assets";
import Title from "./Layout/Title";
import Buttons from "./Layout/Buttons";

const ResultMenu = ({ choice, setChoice, dispatch }) => {
  const RESULT = DATA.find(
    (el) =>
      el.category === choice[0] &&
      el.season === choice[1] &&
      el.color === choice[2]
  );

  return (
    <>
      <Title>YOUR BEST ITEM</Title>
      <ResultMain>
        <img src={RESULT.src} />
        <p>{RESULT.name}</p>
      </ResultMain>
      <Buttons>
        <button
          type="button"
          onClick={() => {
            setChoice(new Array(3));
            dispatch({ type: "GO_BACK" });
          }}>
          RETRY
        </button>
      </Buttons>
    </>
  );
};

export default ResultMenu;

const ResultMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${({ theme }) => theme.fonts.kor};

  & > img {
    height: 50%;
    box-shadow: 0 0 9rem ${({ theme }) => theme.colors.white};
  }
`;
