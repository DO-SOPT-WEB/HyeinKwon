import styled from "styled-components";
import { St } from "../../style/commonStyle";

export default function MoveToBtn(props) {
  const {
    step,
    isSelected,
    handleClickPrevStart,
    handleClickNextStep,
    handleStart,
  } = props;

  function handleClickReStart() {
    handleStart();
  }

  function handlePrevStep() {
    handleClickPrevStart();
  }

  function handleNextStep() {
    handleClickNextStep();
  }
  return (
    <>
      {step === 4 ? (
        <Button onClick={handleClickReStart}>다시하기</Button>
      ) : (
        <>
          <Button onClick={handlePrevStep}>이전으로</Button>
          <Button disabled={!isSelected} onClick={handleNextStep}>
            {step === 3 ? "결과보기" : "다음으로"}
          </Button>
        </>
      )}
    </>
  );
}

const Button = styled.button`
  ${St.centerFelx}

  padding: 0.5rem;
  border-radius: 3px;
  ${({ theme }) => theme.fonts.body02};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.sub1};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: 3px 3px 1px ${({ theme }) => theme.colors.sub1};
    background-color: ${({ theme }) => theme.colors.sub2};
  }
`;
