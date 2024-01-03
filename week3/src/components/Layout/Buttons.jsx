import styled from "styled-components";

const Buttons = ({ children }) => {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
};

export default Buttons;

const ButtonsWrapper = styled.div`
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
