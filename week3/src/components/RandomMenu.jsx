import { useEffect, useState } from "react";
import styled from "styled-components";

const RandomMenu = ({ setChoice, setStep }) => {
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
      setStep(3);
    }
  }, [time]);

  return <>{time}</>;
};

export default RandomMenu;
