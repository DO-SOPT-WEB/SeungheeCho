import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetUserInfo from "../api/useGetUserInfo";

// 마이페이지 내부 콘텐츠 컴포넌트
const MyPageInfo = () => {
  const param = useParams();
  const { username, nickname } = useGetUserInfo(param.userId);

  return (
    <Wrapper>
      <img src="/src/assets/cute.png" alt="프로필 사진" />
      {username ? (
        <div>
          <p>
            <span>ID</span> <span>{username}</span>
          </p>
          <p>
            <span>NICKNAME</span> <span>{nickname}</span>
          </p>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </Wrapper>
  );
};

export default MyPageInfo;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

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

    font-size: 1.3rem;
  }

  & p {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > span:nth-child(1) {
      padding-left: 1rem;
      font-weight: 600;
      border-left: 0.5rem solid ${({ theme }) => theme.colors.sopt};
      height: 1.3rem;
    }
  }
`;
