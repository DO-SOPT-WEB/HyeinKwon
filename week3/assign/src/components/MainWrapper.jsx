import { useEffect, useState } from "react";

import styled from "styled-components";
import MainHeader from "./common/MainHeader";
import ByTypeBtn from "./ByType/ByTypeBtn";
import ByRandomBtn from "./ByRandom/ByRandomBtn";

import { St } from "../style/commonStyle";

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
      <St.BtnWrapper>
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
      </St.BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(St.WrapperForThree)`
  width: 80vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.main};
`;
