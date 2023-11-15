import React from "react";
import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";

export default function SignupBtn() {
  return <SignupButton>회원 가입</SignupButton>;
}

const SignupButton = styled(St.Button)`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;
