import styled from "styled-components";
export default function StartByType(props) {
  // eslint-disable-next-line react/prop-types
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
      ) : null}
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
