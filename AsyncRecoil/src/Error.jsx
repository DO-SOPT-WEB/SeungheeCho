import styled from "styled-components";

const Error = () => {
  return (
    <St.Wrapper>
      <St.Content>에러남이슈</St.Content>
    </St.Wrapper>
  );
};

export default Error;

const St = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  `,
  Content: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 3rem;
    border-radius: 2rem;

    border: 0.2rem solid #cf576b;
    color: #cf576b;
    font-size: 1.2rem;
    font-weight: 700;
  `,
};
