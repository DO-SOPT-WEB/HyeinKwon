import styled from "styled-components";
import ByRandomStart from "./ByRandomStart";

import { St } from "../../style/commonStyle";
export default function ByRandomBtn(props) {
  const {
    isByType,
    setIsByRandom,
    isByRandom,
    handleStart,
    isStart,
    setIsFirstStep,
  } = props;

  function handleClick() {
    setIsByRandom((prev) => !prev);
    setIsFirstStep(false);
  }

  return (
    <>
      {!isByRandom && !isByType && (
        <>
          <Button onClick={handleClick}>랜덤 추천</Button>
        </>
      )}
      {isByRandom && (
        <ByRandomStart
          setIsFirstStep={setIsFirstStep}
          isStart={isStart}
          handleStart={handleStart}
        />
      )}
      {isByType && null}
    </>
  );
}

const Button = styled(St.TwoButtonStyle)`
  background-color: ${({ theme }) => theme.colors.background};
  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
