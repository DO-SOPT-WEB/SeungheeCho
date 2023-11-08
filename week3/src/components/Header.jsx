import styled from "styled-components";

const Header = ({ dispatch, howPick, setHowPick, setChoice }) => {
  return (
    <HeaderWrapper>
      <h1>PICK your BLACKUP</h1>
      {howPick !== "" && (
        <ResetBtn
          type="button"
          onClick={() => {
            setHowPick("");
            setChoice(new Array(3));
            dispatch({ type: "GO_BACK" });
          }}>
          처음으로
        </ResetBtn>
      )}
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

const ResetBtn = styled.button`
  position: absolute;
  right: 0;
  margin-right: 3rem;
`;
