import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";

export default function SignupBtn(props) {
  const { disabled, onClick } = props;
  return (
    <SignupButton disabled={disabled} onClick={onClick}>
      회원 가입
    </SignupButton>
  );
}

const SignupButton = styled(St.Button)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.subTextColor : theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
