import styled from "styled-components";

import MainHeader from "../common/MainHeader";

import { St } from "../../style/commonStyle";

export default function CategoryChoose(props) {
  const { isSelected, setIsSelected, setCategory, step } = props;
  const categories = ["실용", "재미", "독특"];

  function handleButtonClick(category) {
    setIsSelected(category);
    setCategory(category);
  }

  return (
    <St.WrapperForThree>
      <MainHeader>카테고리를 골라봐!</MainHeader>
      <Step>{step} / 3</Step>
      <St.BtnWrapper>
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
      </St.BtnWrapper>
    </St.WrapperForThree>
  );
}

const Step = styled.p`
  position: absolute;
  top: 5rem;
  right: 2rem;

  ${({ theme }) => theme.fonts.body05};
  ${({ theme }) => theme.colors.grey};
`;

const Button = styled(St.ThreeButtonStyle)`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.sub2 : theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
