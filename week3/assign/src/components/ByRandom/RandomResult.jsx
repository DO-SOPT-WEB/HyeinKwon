import { DATA } from "../../constants/DATA";
import styled from "styled-components";
import { St } from "../../style/commonStyle";

export default function RandomResult() {
  function makeRandomPic(array) {
    let randomIdx = Math.floor(Math.random() * array.length);
    let randomPic = array[randomIdx];
    return randomPic;
  }

  let randomPic = makeRandomPic(DATA);
  return (
    <Wrapper>
      <ImgWrapper src={randomPic.pic} alt={randomPic.name} />
      <ImgName>{randomPic.name}</ImgName>
    </Wrapper>
  );
}

const Wrapper = styled(St.FlexColumnCenter)`
  gap: 3rem;
`;

const ImgWrapper = styled.img`
  ${St.centerFelx}
  width: 25rem;
  height: 25rem;
`;

const ImgName = styled.h2`
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.sub1};

  padding: 0.5rem;
  border-top: 3px solid ${({ theme }) => theme.colors.sub1};
  border-bottom: 3px solid ${({ theme }) => theme.colors.sub1};

  background-color: ${({ theme }) => theme.colors.sub2};
  ${({ theme }) => theme.fonts.title02};
`;
