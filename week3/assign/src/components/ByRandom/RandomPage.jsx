import styled from "styled-components";
import MainHeader from "../common/MainHeader";
import RandomResult from "./RandomResult";
// eslint-disable-next-line react/prop-types
export default function RandomPage({ handleStart }) {
  function handleClickReStart() {
    handleStart();
  }

  return (
    <Wrapper>
      <MainHeader>오늘의 이모티콘은!!</MainHeader>
      <RandomResult />
      <ReStartBtn onClick={handleClickReStart}>다시하기</ReStartBtn>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;

const ReStartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 3px;
  ${({ theme }) => theme.fonts.body02};
  box-shadow: 3px 3px 1px ${({ theme }) => theme.colors.sub2};
  background-color: ${({ theme }) => theme.colors.sub1};

  &:hover {
    box-shadow: 3px 3px 1px ${({ theme }) => theme.colors.sub1};
    background-color: ${({ theme }) => theme.colors.sub2};
  }
`;
