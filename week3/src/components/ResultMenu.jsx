import styled from "styled-components";
import DATA from "../assets";

const ResultMenu = ({ choice, setChoice, setStep }) => {
  const RESULT = DATA.find(
    (el) =>
      el.category === choice[0] &&
      el.season === choice[1] &&
      el.color === choice[2]
  );

  return (
    <>
      <Header>
        <h2>YOUR BEST ITEM</h2>
      </Header>
      <ResultMain>
        <img src={RESULT.src} />
        <p>{RESULT.name}</p>
      </ResultMain>
      <Buttons>
        <button
          type="button"
          onClick={() => {
            setChoice(new Array(3));
            setStep(-1);
          }}>
          RETRY
        </button>
      </Buttons>
    </>
  );
};

export default ResultMenu;

const Header = styled.header`
  position: absolute;
  top: 0;
  margin-top: 2rem;

  font-size: 1.8rem;
  font-weight: bold;

  ${({ theme }) => theme.fonts.eng};
`;

const ResultMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${({ theme }) => theme.fonts.kor};

  & > img {
    height: 50%;
  }
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
    ${({ theme }) => theme.fonts.eng};

    &:hover {
      border: 0.2rem solid ${({ theme }) => theme.colors.black};
    }
    &:disabled {
      border: 0;
    }
  }
`;
