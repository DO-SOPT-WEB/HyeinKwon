import styled from "styled-components";
import ChooseByType from "./ChooseByType";

import { St } from "../../style/commonStyle";

export default function StartByType(props) {
  const { isStart, handleStart } = props;
  function handleClickBtn() {
    handleStart();
  }
  return (
    <>
      {!isStart ? (
        <Wrapper>
          <ButtonLager>취향대로 추천</ButtonLager>
          <StartBtn onClick={handleClickBtn}>시작하기</StartBtn>
        </Wrapper>
      ) : (
        <ChooseByType handleStart={handleStart} />
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

  background-color: ${({ theme }) => theme.colors.sub2};
  ${({ theme }) => theme.fonts.title03};
  border-radius: 5px;
`;

const Wrapper = styled(St.FlexColumnCenter)`
  gap: 2rem;
`;
