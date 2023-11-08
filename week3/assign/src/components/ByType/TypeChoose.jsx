import { useState } from "react";
import styled from "styled-components";
import MainHeader from "../common/MainHeader";

export default function TypeChoose(props) {
  const { isSelected, setIsSelected, setType } = props;
  const types = ["커플", "일상", "가족/친구"];

  function handleButtonClick(type) {
    setIsSelected(type);
    setType(type);
  }

  return (
    <Wrapper>
      <MainHeader>어떤 상황에서 쓸 건지 골라봐!</MainHeader>
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

  gap: 5rem;
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
