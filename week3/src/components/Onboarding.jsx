import { useState } from "react";
import styled from "styled-components";

const Onboarding = () => {
  const [howPick, setHowPick] = useState("");

  return (
    <OnboardingWrapper>
      <OnboardingHeader>
        <h2>추천 방식을 골라주세요</h2>
      </OnboardingHeader>
      <OnboardingBox $howPick={howPick}>
        <OnboardingCard
          onClick={() => {
            setHowPick("취향대로 추천");
          }}>
          취향대로 추천
        </OnboardingCard>
        <OnboardingCard
          onClick={() => {
            setHowPick("랜덤 추천");
          }}>
          랜덤 추천
        </OnboardingCard>
      </OnboardingBox>
      <OnboardingPick $howPick={howPick}>{howPick}</OnboardingPick>

      <OnboardingStartBtn $howPick={howPick}> Start!</OnboardingStartBtn>
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
  display: ${(props) => (props.$howPick === "" ? "flex" : "none")};
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

  &:hover {
    background-color: #ffe1e6;
  }
`;

const OnboardingPick = styled.button`
  display: ${(props) => (props.$howPick === "" ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  margin-top: 4rem;
  width: 43vw;
  height: 30vh;

  border-radius: 1rem;
  background-color: white;

  font-size: 2rem;
`;

const OnboardingStartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.$howPick === "" ? "hidden" : "visible")};

  margin-top: 2rem;
  width: 5rem;
  height: 2rem;

  border-radius: 1rem;
  background-color: black;
  color: white;

  cursor: pointer;
`;
