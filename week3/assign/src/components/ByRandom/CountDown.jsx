import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CountDown() {
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
      {showResult && <div>히히</div>}
    </>
  );
}

const CountDownNumber = styled.h3`
  ${({ theme }) => theme.fonts.body03};
`;
