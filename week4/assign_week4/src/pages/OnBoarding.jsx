import styled from "styled-components";
import { St } from "../styles/common/commonStyle";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import { Link } from "react-router-dom";

export default function OnBoarding() {
  return (
    <LayoutStyle>
      <GotoLoginButton to="/login">로그인하러가기</GotoLoginButton>
    </LayoutStyle>
  );
}

const GotoLoginButton = styled(Link)`
  ${St.Button}
`;
