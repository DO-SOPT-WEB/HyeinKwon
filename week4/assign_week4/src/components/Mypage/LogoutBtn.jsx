import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";
import { Link } from "react-router-dom";

export default function LogoutBtn() {
  return <LogoutButton to="/login">Logout</LogoutButton>;
}

const LogoutButton = styled(Link)`
  ${St.centerFlex};
  width: 5rem;
  height: 2rem;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.subTextColor};
`;
