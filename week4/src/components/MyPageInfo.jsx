import styled from "styled-components";

// 사용자정보조회GET /mypage/:userId
// 조회 에러처리 - /signUp으로 이동
// 로그아웃 버튼 클릭 시 /login 이동

const MyPageInfo = () => {
  return (
    <Wrapper>
      <img src="/src/assets/cute.png" alt="프로필 사진" />
      <div>
        <p>
          ID : <span>아이디</span>
        </p>
        <p>
          닉네임 : <span>nick</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default MyPageInfo;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 100%;

  & > img {
    width: 10rem;
    height: 10rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.5rem;
    font-weight: 600;
  }
`;
