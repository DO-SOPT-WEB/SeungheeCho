import styled from "styled-components";

const Onboarding = () => {
  return (
    <OnboardingWrapper>
      <OnboardingHeader>
        <h2>추천 방식을 골라주세요</h2>
      </OnboardingHeader>
      <OnboardingBox>
        <OnboardingCard>취향대로 추천</OnboardingCard>
        <OnboardingCard>랜덤 추천</OnboardingCard>
      </OnboardingBox>
    </OnboardingWrapper>
  );
};

export default Onboarding;

const OnboardingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 60%;
  padding: 3rem;

  background-color: pink;
`;

const OnboardingHeader = styled.header`
  font-size: 1.3rem;
  font-weight: bold;
`;

const OnboardingBox = styled.section`
  display: flex;
  gap: 3rem;

  margin-top: 4rem;
`;

const OnboardingCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;
  height: 30vh;

  border-radius: 1rem;
  background-color: white;

  font-size: 2rem;

  cursor: pointer;
`;
