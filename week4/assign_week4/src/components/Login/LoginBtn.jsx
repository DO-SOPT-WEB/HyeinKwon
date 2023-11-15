import React from "react";
import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";

export default function LoginBtn() {
  return <LoginButton>로그인</LoginButton>;
}

const LoginButton = styled(St.Button)`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;
