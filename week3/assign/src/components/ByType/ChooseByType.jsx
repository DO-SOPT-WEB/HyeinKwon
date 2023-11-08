import styled from "styled-components";
import CategoryChoose from "./CategoryChoose";
import TypeChoose from "./TypeChoose";
import AnimalChoose from "./AnimalChoose";
import { useState } from "react";
import ResultByType from "./ResultByType";
import MoveToBtn from "../common/MoveToBtn";

export default function ChooseByType({ handleStart }) {
  const [step, setStep] = useState(1);
  const [isSelected, setIsSelected] = useState(null);

  function handleClickNextStep() {
    switch (step) {
      case 1:
        setStep(2);
        setIsSelected(null);
        break;
      case 2:
        setStep(3);
        setIsSelected(null);
        break;
      case 3:
        setStep(4);
        setIsSelected(null);
        break;
      default:
        break;
    }
  }

  function handleClickPrevStart() {
    switch (step) {
      case 1:
        handleStart();
        break;
      case 2:
        setStep(1);
        break;
      case 3:
        setStep(2);
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      {step == 1 && (
        <CategoryChoose isSelected={isSelected} setIsSelected={setIsSelected} />
      )}
      {step == 2 && (
        <TypeChoose isSelected={isSelected} setIsSelected={setIsSelected} />
      )}
      {step === 3 && (
        <AnimalChoose isSelected={isSelected} setIsSelected={setIsSelected} />
      )}
      {step === 4 && <ResultByType />}

      <BtnWrapper>
        <MoveToBtn
          step={step}
          handleClickPrevStart={handleClickPrevStart}
          handleClickNextStep={handleClickNextStep}
          isSelected={isSelected}
          handleStart={handleStart}
        />
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;
