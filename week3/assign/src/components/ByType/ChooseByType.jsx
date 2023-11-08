import styled from "styled-components";
import CategoryChoose from "./CategoryChoose";
import TypeChoose from "./TypeChoose";
import HumanChoose from "./HumanChoose";
import { useCallback, useReducer, useState } from "react";
import ResultByType from "./ResultByType";
import MoveToBtn from "../common/MoveToBtn";

function stepReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return state < 4 ? state + 1 : state;
    case "PREV_STEP":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
}

export default function ChooseByType({ handleStart }) {
  const [step, dispatch] = useReducer(stepReducer, 1);
  const [isSelected, setIsSelected] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [isHuman, setIsHuman] = useState(true);
  const [firstState, setFirstState] = useState(null);
  const [secondState, setSecondState] = useState(null);

  const handleClickNextStep = useCallback(() => {
    if (isSelected) {
      dispatch({ type: "NEXT_STEP" });

      if (step === 1) {
        setFirstState(isSelected);
      } else if (step === 2) {
        setSecondState(isSelected);
      }

      setIsSelected(null);
    }
  }, [isSelected, dispatch, step, setFirstState, setSecondState]);

  const handleClickPrevStart = useCallback(() => {
    dispatch({ type: "PREV_STEP" });
    setIsSelected(step === 1 ? firstState : secondState);
    if (step === 1) {
      handleStart();
    }
  }, [dispatch, step, firstState, secondState, setIsSelected, handleStart]);

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
