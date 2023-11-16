import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";
export default function ToastModal({ message }) {
  return <ModalWrapper>{message}</ModalWrapper>;
}

const ModalWrapper = styled.div`
  ${St.centerFlex};

  width: 28rem;
  height: 4rem;
  padding: 2rem;
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.subTextColor};
  border-radius: 8px;
`;
