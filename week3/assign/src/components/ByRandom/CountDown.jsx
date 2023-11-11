import { useEffect, useState } from "react";
import styled from "styled-components";
import RandomPage from "./RandomPage";
import { countDownAnimation } from "../../style/countDownAnimation";
import { St } from "../../style/commonStyle";

export default function CountDown({ handleStart }) {
  const [countDown, setCountDown] = useState(3);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      } else {
        clearInterval(timer);
        setShowResult(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDown]);

  return (
    <>
      {countDown != 0 ? <CountDownNumber>{countDown}</CountDownNumber> : null}
      {showResult && <RandomPage handleStart={handleStart} />}
    </>
  );
}

const CountDownNumber = styled.p`
  ${St.centerFelx}

  width: 100px;
  height: 100px;

  ${({ theme }) => theme.fonts.neon};
  animation: ${countDownAnimation} 1s ease alternate infinite;
`;
