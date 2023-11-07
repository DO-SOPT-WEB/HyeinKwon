import styled from "styled-components";

import MainHeader from "../common/MainHeader";
import { useState } from "react";

export default function ChooseCategory({ handleStart }) {
  const [isSelected, setIsSelected] = useState(null);
  const categories = ["실용", "재미", "독특"];
  function handleButtonClick(category) {
    setIsSelected(category);
  }
  return (
    <Wrapper>
      <MainHeader>카테고리를 골라봐!</MainHeader>
      <BtnWrapper>
        {categories.map((category) => {
          return (
            <Button
              key={category}
              onClick={() => handleButtonClick(category)}
              active={isSelected === category}>
              {category}
            </Button>
          );
        })}
      </BtnWrapper>

      <BtnWrapper>
        <MoveToBtn>이전으로</MoveToBtn>
        <MoveToBtn disabled={!isSelected}>다음으로</MoveToBtn>
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

const MoveToBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 3px;
  ${({ theme }) => theme.fonts.body02};
  box-shadow: 3px 3px 1px ${({ theme }) => theme.colors.sub2};
  background-color: ${({ theme }) => theme.colors.sub1};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: 3px 3px 1px ${({ theme }) => theme.colors.sub1};
    background-color: ${({ theme }) => theme.colors.sub2};
  }
`;
