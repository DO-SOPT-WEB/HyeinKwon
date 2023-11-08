import styled from "styled-components";
import CategoryChoose from "./CategoryChoose";
import TypeChoose from "./TypeChoose";
import HumanChoose from "./HumanChoose";
import { useReducer, useState } from "react";
import ResultByType from "./ResultByType";
import MoveToBtn from "../common/MoveToBtn";

export default function ChooseByType({ handleStart }) {
  const [step, setStep] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [isHuman, setIsHuman] = useState(true);
  const [firstState, setFirstState] = useState(null);
  const [secondState, setSecondState] = useState(null);

  function handleClickNextStep() {
    switch (step) {
      case 1:
        setStep(2);
        setFirstState(isSelected);
        setIsSelected(null);
        break;
      case 2:
        setStep(3);
        setSecondState(isSelected);
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
        setIsSelected(firstState);
        break;
      case 3:
        setStep(2);
        setIsSelected(secondState);
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      {step == 1 && (
        <CategoryChoose
          step={step}
          category={category}
          setCategory={setCategory}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {step == 2 && (
        <TypeChoose
          step={step}
          type={type}
          setType={setType}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {step === 3 && (
        <HumanChoose
          step={step}
          isHuman={isHuman}
          setIsHuman={setIsHuman}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {step === 4 && (
        <ResultByType category={category} type={type} isHuman={isHuman} />
      )}

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
