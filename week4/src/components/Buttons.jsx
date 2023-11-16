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
    padding: 0.7rem;

    border-radius: 1rem;
    border: 0;

    font-size: 1.2rem;
    font-weight: 600;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.sopt};
      box-shadow: 0rem 0rem 0.3rem ${({ theme }) => theme.colors.sopt};
    }
  }
`;
