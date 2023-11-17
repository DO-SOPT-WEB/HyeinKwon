import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { St } from "../../styles/common/commonStyle";

export default function GotoJoinBtn() {
  const navigate = useNavigate();

  return (
    <GotoJoinButton
      onClick={() => {
        navigate("/signup");
      }}>
      회원가입
    </GotoJoinButton>
  );
}

const GotoJoinButton = styled(St.Button)`
  color: ${({ theme }) => theme.colors.textColor};
`;
