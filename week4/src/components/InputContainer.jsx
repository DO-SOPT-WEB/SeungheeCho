import styled from "styled-components";

// 입력창 컴포넌트 (공통)
const InputContainer = ({ name, state, $setState, custom, children }) => {
  return custom ? (
    <Container>{children}</Container>
  ) : (
    <Container>
      <label htmlFor={state}>{name}</label>
      <input
        type="text"
        id={state}
        value={state}
        onChange={(e) => $setState(e.target.value)}
      />
    </Container>
  );
};

export default InputContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 20rem;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;

  & input {
    height: 2rem;

    font-size: 1.2rem;

    border-radius: 0.3rem;
    border: 0;
  }

  & > div {
    display: flex;
    gap: 1rem;

    width: 100%;
  }
`;
