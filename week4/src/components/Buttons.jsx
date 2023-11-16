import styled from "styled-components";

// 버튼 컴포넌트 (공통)
const Buttons = (buttons) => {
  return (
    <Container>
      {buttons.map(({ name, clickAction, disabled }) => (
        <button
          type="button"
          key={name}
          onClick={clickAction}
          disabled={disabled}>
          {name}
        </button>
      ))}
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  & > button {
    font-size: 1.3rem;
    padding: 0.5rem;

    border-radius: 0.5rem;
    border: 0;

    cursor: pointer;
  }
`;
