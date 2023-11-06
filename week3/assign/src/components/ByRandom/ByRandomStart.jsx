import styled from "styled-components";
import CountDown from "./CountDown";
// eslint-disable-next-line react/prop-types
export default function ByRandomStart({ isStart, handleStart }) {
  function handleClickBtn() {
    handleStart();
  }
  return (
    <>
      {!isStart ? (
        <Wrapper>
          <ButtonLager>랜덤 추천</ButtonLager>
          <StartBtn onClick={handleClickBtn}>시작하기</StartBtn>
        </Wrapper>
      ) : (
        <CountDown />
      )}
    </>
  );
}

const ButtonLager = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 50rem;
`;

const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.sub2};
  ${({ theme }) => theme.fonts.title03};
  border-radius: 5px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;
