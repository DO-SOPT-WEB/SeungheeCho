import styled from "styled-components";

const Loading = () => {
  return (
    <St.Wrapper>
      <St.Content>로딩중...</St.Content>
    </St.Wrapper>
  );
};

export default Loading;

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

    background-color: #cf576b;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
  `,
};
