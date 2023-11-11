import styled from "styled-components";
import StartByType from "./StartByType";
import { St } from "../../style/commonStyle";

export default function ByTypeBtn(props) {
  const {
    isByType,
    isByRandom,
    setIsByType,
    isStart,
    handleStart,
    setIsFirstStep,
  } = props;

  function handleClick() {
    setIsByType((prev) => !prev);
    setIsFirstStep(false);
  }

  return (
    <>
      {!isByRandom && !isByType && (
        <Button onClick={handleClick}>취향대로 추천</Button>
      )}
      {!isByRandom && isByType && (
        <StartByType isStart={isStart} handleStart={handleStart} />
      )}
      {isByRandom && <></>}
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
