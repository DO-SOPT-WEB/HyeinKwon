import styled from "styled-components";

import MainHeader from "../common/MainHeader";

export default function CategoryChoose(props) {
  const { isSelected, setIsSelected, setCategory, step } = props;
  const categories = ["실용", "재미", "독특"];

  function handleButtonClick(category) {
    setIsSelected(category);
    setCategory(category);
  }

  return (
    <Wrapper>
      <MainHeader>카테고리를 골라봐!</MainHeader>
      <Step>{step} / 3</Step>
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
