import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../common/MainHeader";

export default function TypeChoose(props) {
  const { isSelected, setIsSelected, setType, step } = props;
  const types = ["커플", "일상", "가족/친구"];

  function handleButtonClick(type) {
    setIsSelected(type);
    setType(type);
  }

  return (
    <Wrapper>
      <MainHeader>어떤 상황에서 쓸 건지 골라봐!</MainHeader>
      <Step>{step} / 3</Step>
      <BtnWrapper>
        {types.map((type) => {
          return (
            <Button
              key={type}
              onClick={() => handleButtonClick(type)}
              active={isSelected === type}>
              {type}
            </Button>
          );
        })}
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  gap: 5rem;
`;

const Step = styled.p`
  position: absolute;
  top: 5rem;
  right: 2rem;

  ${({ theme }) => theme.fonts.body05};
  ${({ theme }) => theme.colors.grey};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  border-radius: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.sub2 : theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
