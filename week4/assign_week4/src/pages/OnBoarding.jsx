import styled from "styled-components";
import { St } from "../styles/common/commonStyle";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import { Link } from "react-router-dom";

export default function OnBoarding() {
  return (
    <LayoutStyle>
      <GotoLogin to="/login">
        <Button>로그인하러가기</Button>
      </GotoLogin>
    </LayoutStyle>
  );
}

const GotoLogin = styled(Link)``;

const Button = styled.button`
  width: 30rem;
  height: 5rem;
  ${St.centerFlex}
  border-radius: 10px;
  ${({ theme }) => theme.fonts.title01};
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;
