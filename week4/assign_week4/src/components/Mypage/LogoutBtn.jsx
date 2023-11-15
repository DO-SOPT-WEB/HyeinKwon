import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";
export default function LogoutBtn() {
  return <LogoutButton>Logout</LogoutButton>;
}

const LogoutButton = styled.button`
  ${St.centerFlex};
  width: 5rem;
  height: 2rem;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.subTextColor};
`;
