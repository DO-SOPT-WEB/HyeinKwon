import styled from "styled-components";
// eslint-disable-next-line react/prop-types
export default function MainHeader({ children }) {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 5rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.fonts.title02};
`;
