import styled from "styled-components";
import MainHeader from "../common/MainHeader";
export default function AnimalChoose(props) {
  const { isSelected, setIsSelected } = props;
  const isAnimalArray = ["사람", "동물"];

  function handleButtonClick(ele) {
    setIsSelected(ele);
  }

  return (
    <>
      <MainHeader>사람 이모티콘이 좋아? 아니면 다른게 좋아?</MainHeader>
      <BtnWrapper>
        {isAnimalArray.map((ele) => {
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
    </>
  );
}

const BtnWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
    ${({ theme }) => theme.fonts.title02};
  }
`;
