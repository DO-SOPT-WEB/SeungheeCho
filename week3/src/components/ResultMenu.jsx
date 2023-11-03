import styled from "styled-components";

const ResultMenu = ({ choice }) => {
  let category, season, color;
  switch (choice[0]) {
    case 0:
      category = "out";
      break;
    case 1:
      category = "top";
      break;
    case 2:
      category = "pants";
      break;
    case 3:
      category = "set";
      break;
    case 4:
      category = "etc";
  }
  switch (choice[1]) {
    case 0:
      season = "sum";
      break;
    case 1:
      season = "sf";
      break;
    case 2:
      season = "win";
  }
  switch (choice[2]) {
    case 0:
      color = "black";
      break;
    case 1:
      color = "col";
  }
  const PATH = `/src/assets/${category}_${season}_${color}.png`;

  return (
    <>
      <Header>
        <h2>YOUR BEST ITEM</h2>
      </Header>
      <ResultMain>
        <img src={PATH} />
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
  gap: 2rem;

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
