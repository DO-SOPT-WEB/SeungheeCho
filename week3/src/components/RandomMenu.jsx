import { useEffect, useState } from "react";
import styled from "styled-components";

const RandomMenu = ({ setChoice, dispatch }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      setChoice([
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
      ]);
      dispatch({ type: "GO_RESULT" });
    }
  }, [time]);

  return (
    <>
      <Number>{time}</Number>
    </>
  );
};

export default RandomMenu;

const Number = styled.p`
  font-size: 2rem;

  animation: flicker 1s infinite;

  @keyframes flicker {
    50% {
      text-shadow: 0 0 0.5rem #fff, 0 0 0.7rem #fff, 0 0 1rem #fff,
        0 0 2rem #0fa, 0 0 3rem #0fa;
    }
    0%,
    100% {
      text-shadow: none;
    }
  }
`;
