import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>PICK your BLACKUP</h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  font-weight: bolder;
  font-size: 2rem;

  ${({ theme }) => theme.fonts.eng}
`;
