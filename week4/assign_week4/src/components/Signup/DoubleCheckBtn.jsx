import styled from "styled-components";
import { St } from "../../styles/common/commonStyle";

export default function DoubleCheckBtn(props) {
  const { isExist, onClick } = props;
  return (
    <DoubleCheckButton isExist={isExist} onClick={onClick}>
      중복 체크
    </DoubleCheckButton>
  );
}

const DoubleCheckButton = styled.button`
  ${St.centerFlex};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body02};
  background-color: ${({ isExist }) =>
    isExist === 0 ? "black" : isExist ? "red" : "green"};
  border-radius: 3px;
  width: 4rem;
  height: 3rem;
`;
