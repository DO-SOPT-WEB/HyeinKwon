import styled from "styled-components";
import { DATA } from "../../assets/DATA";
import MainHeader from "../common/MainHeader";

import { St } from "../../style/commonStyle";

export default function ResultByType(props) {
  const { category, type, isHuman } = props;

  function makeResult(array) {
    return array.filter((ele) => {
      return (
        ele.category === category &&
        ele.type === type &&
        ele.isHuman === isHuman
      );
    });
  }

  let resultPic = makeResult(DATA);

  return (
    <Wrapper>
      <MainHeader>두근두근! 결과는?</MainHeader>
      {resultPic.map((pic) => (
        <>
          <ImgWrapper key={pic.name} src={pic.pic} alt={pic.alt} />
          <ImgName>{pic.name}</ImgName>
        </>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(St.FlexColumnCenter)`
  gap: 2rem;
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
