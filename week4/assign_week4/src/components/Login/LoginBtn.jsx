import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";

export default function LoginBtn({ onClick }) {
  return <LoginButton onClick={onClick}>로그인</LoginButton>;
}

const LoginButton = styled(St.Button)`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;
