import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";
export default function UserInform(props) {
  const { inform, text } = props;
  return (
    <UserInformBox>
      {inform} {text}
    </UserInformBox>
  );
}

const UserInformBox = styled.p`
  ${St.centerFlex}
  width: 20rem;
  height: 3rem;
  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.main};
`;
