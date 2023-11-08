import styled from "styled-components";
import MainHeader from "../common/MainHeader";

import { St } from "../../style/commonStyle";

export default function TypeChoose(props) {
  const { isSelected, setIsSelected, setType, step } = props;
  const types = ["커플", "일상", "가족/친구"];

  function handleButtonClick(type) {
    setIsSelected(type);
    setType(type);
  }

  return (
    <St.WrapperForThree>
      <MainHeader>어떤 상황에서 쓸 건지 골라봐!</MainHeader>
      <Step>{step} / 3</Step>
      <St.BtnWrapper>
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
