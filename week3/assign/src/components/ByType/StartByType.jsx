import styled from "styled-components";
export default function StartByType() {
  return (
    <>
      <Wrapper>취향대로 추천</Wrapper>
      <StartBtn>시작</StartBtn>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 30rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StartBtn = styled.button``;
