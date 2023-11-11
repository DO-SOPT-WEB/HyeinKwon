import styled from "styled-components";
import CountDown from "./CountDown";
import { St } from "../../style/commonStyle";

export default function ByRandomStart(props) {
  const { isStart, handleStart, setIsFirstStep } = props;
  function handleClickBtn() {
    handleStart();
    setIsFirstStep(false);
  }
  return (
    <>
      {!isStart ? (
        <Wrapper>
          <ButtonLager>랜덤 추천</ButtonLager>
          <StartBtn onClick={handleClickBtn}>시작하기</StartBtn>
        </Wrapper>
      ) : (
        <CountDown handleStart={handleStart} />
      )}
    </>
  );
}

const ButtonLager = styled(St.TwoButtonStyle)`
  background-color: ${({ theme }) => theme.colors.background};
  width: 50rem;
`;

const StartBtn = styled.button`
  ${St.centerFelx}

  width: 10rem;
  height: 5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.sub2};
  ${({ theme }) => theme.fonts.title03};
`;

const Wrapper = styled(St.FlexColumnCenter)`
  gap: 2rem;
`;
