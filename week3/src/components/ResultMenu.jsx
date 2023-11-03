import styled from "styled-components";
import DATA from "../assets";

const ResultMenu = ({ choice }) => {
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
        <button type="button">RETRY</button>
      </Buttons>
    </>
  );
};

export default ResultMenu;

const Header = styled.header`
  position: absolute;
  top: 0;
  margin-top: 2rem;

  font-size: 1.3rem;
  font-weight: bold;
`;

const ResultMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-weight: bold;

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

    background-color: white;

    &:hover {
      border: 0.2rem solid black;
    }
    &:disabled {
      border: 0;
    }
  }
`;
