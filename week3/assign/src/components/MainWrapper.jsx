import { useState } from "react";

import styled from "styled-components";
import MainHeader from "./common/MainHeader";
import ByTypeBtn from "./ByType/ByTypeBtn";
import ByRandomBtn from "./ByRandom/ByRandomBtn";

export default function MainWrapper() {
  const [isByType, setIsByType] = useState(false);
  const [isByRandom, setIsByRandom] = useState(false);
  const [isStart, setIsStart] = useState(false);
  function handleStart() {
    setIsStart(true);
  }

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
        />
        <ByRandomBtn
          isByRandom={isByRandom}
          setIsByRandom={setIsByRandom}
          isByType={isByType}
          isStart={isStart}
          handleStart={handleStart}
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.active ? "25rem" : "15rem")};
  height: 25rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
