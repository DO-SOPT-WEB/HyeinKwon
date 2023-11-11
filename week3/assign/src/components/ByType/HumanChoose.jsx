import styled from "styled-components";
import MainHeader from "../common/MainHeader";
import { St } from "../../style/commonStyle";

export default function HumanChoose(props) {
  const { isSelected, setIsSelected, setIsHuman, step } = props;
  const isHumanArray = ["사람", "동물"];

  function handleButtonClick(ele) {
    {
      ele == "사람" ? setIsHuman(true) : setIsHuman(false);
    }
    setIsSelected(ele);
  }

  return (
    <St.WrapperForThree>
      <MainHeader>사람 이모티콘이 좋아? 아니면 다른게 좋아?</MainHeader>
      <Step>{step} / 3</Step>
      <BtnWrapper>
        {isHumanArray.map((ele) => {
          return (
            <Button
              key={ele}
              onClick={() => handleButtonClick(ele)}
              active={isSelected === ele}>
              {ele}
            </Button>
          );
        })}
      </BtnWrapper>
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

const BtnWrapper = styled.article`
  ${St.centerFelx}

  gap: 5rem;
`;

const Button = styled(St.TwoButtonStyle)`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.sub2 : theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
