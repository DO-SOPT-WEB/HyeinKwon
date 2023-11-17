import styled, { css } from "styled-components";

export const HeaderText = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  ${({ theme }) => theme.fonts.title01};
`;

export const Flag = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  ${({ theme }) => theme.fonts.title02};
`;
