import { useEffect, useState } from "react";

import styled from "styled-components";
import MainHeader from "./common/MainHeader";
import ByTypeBtn from "./ByType/ByTypeBtn";
import ByRandomBtn from "./ByRandom/ByRandomBtn";

export default function MainWrapper({ setIsFirstStep, isFirstStep }) {
  const [isByType, setIsByType] = useState(false);
  const [isByRandom, setIsByRandom] = useState(false);
  const [isStart, setIsStart] = useState(false);

  function handleStart() {
    setIsStart((prev) => !prev);
  }

  useEffect(() => {
    if (isFirstStep) {
      setIsByType(false);
      setIsByRandom(false);
    }
  }, [isFirstStep]);

  return (
    <Wrapper>
      {!isStart ? <MainHeader>원하는 추천 방식을 골라줘!</MainHeader> : null}
      <BtnWrapper>
        <ByTypeBtn
          isByType={isByType}
          setIsByType={setIsByType}
          isByRandom={isByRandom}
          isStart={isStart}
          handleStart={handleStart}
          setIsFirstStep={setIsFirstStep}
        />
        <ByRandomBtn
          isByRandom={isByRandom}
          setIsByRandom={setIsByRandom}
          isByType={isByType}
          isStart={isStart}
          handleStart={handleStart}
          setIsFirstStep={setIsFirstStep}
        />
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 50vh;

  gap: 5rem;
  background-color: ${({ theme }) => theme.colors.main};
`;

const BtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5rem;
`;
