import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetUserInfo from "../api/useGetUserInfo";

const MyPageInfo = () => {
  const param = useParams();
  const { nickname, username } = useGetUserInfo(param.userId);

  return (
    <Wrapper>
      <img src="/src/assets/cute.png" alt="프로필 사진" />
      {username ? (
        <div>
          <p>
            ID : <span>{username}</span>
          </p>
          <p>
            닉네임 : <span>{nickname}</span>
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

    font-size: 1.5rem;
    font-weight: 600;
  }
`;
