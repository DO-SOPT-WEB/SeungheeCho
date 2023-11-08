import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Header>
      <h2>{children}</h2>
    </Header>
  );
};

export default Title;

const Header = styled.header`
  position: absolute;
  top: 0;
  margin-top: 2rem;

  font-size: 1.8rem;
  font-weight: bold;

  ${({ theme }) => theme.fonts.eng};
`;
