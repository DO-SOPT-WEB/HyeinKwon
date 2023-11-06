import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>이모티콘 추천해줄게</HeaderTitle>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;

  background-color: ${({ theme }) => theme.colors.main};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.title01};
`;
