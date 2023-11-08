import styled from "styled-components";

import { St } from "../style/commonStyle";

export default function Header(props) {
  const { isFirstStep, handleGotoFirstPage } = props;

  function handleGotoFirstStep() {
    handleGotoFirstPage();
  }

  return (
    <HeaderWrapper>
      <HeaderTitle>이모티콘 추천해줄게</HeaderTitle>
      {!isFirstStep && (
        <GotoFirst onClick={handleGotoFirstStep}>처음으로</GotoFirst>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled(St.FlexColumnCenter)`
  width: 100%;
  height: 10vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.main};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.title01};
`;

const GotoFirst = styled.button`
  ${St.centerFelx}

  width: 5rem;
  height: 3rem;

  position: absolute;
  right: 60rem;
  top: 5rem;

  background-color: ${({ theme }) => theme.colors.sub2};
  ${({ theme }) => theme.fonts.body04};
  border-radius: 5px;

  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.sub1};
`;
