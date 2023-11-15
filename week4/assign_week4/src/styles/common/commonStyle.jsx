import styled, { css } from "styled-components";

const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const centerFlexColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputFlagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 40rem;
`;

const Input = styled.input`
  display: flex;
  padding: 1rem;
  width: 30rem;
  height: 3rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.subTextColor};
`;

const Button = styled.button`
  ${centerFlex};
  ${({ theme }) => theme.fonts.body01};
  width: 40rem;
  height: 3rem;
  padding: 2rem;
  border-radius: 50px;
`;

export const St = {
  centerFlex,
  centerFlexColumn,
  Input,
  Button,
  InputFlagWrapper,
};
