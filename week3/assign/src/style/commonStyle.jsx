import styled, { css } from "styled-components";

const centerFelx = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const gap5rem = css`
  gap: 5rem;
`;

const gap3rem = css`
  gap: 3rem;
`;

const FlexColumnCenter = styled.div`
  ${centerFelx}
  flex-direction: column;
`;

const FlexRowCenter = styled.div`
  ${centerFelx}
  flex-direction: row;
`;

const BtnWrapper = styled(FlexRowCenter)`
  ${gap3rem}
`;

const WrapperForThree = styled(FlexColumnCenter)`
  ${gap5rem}
  position: relative;
`;

const ThreeButtonStyle = styled.button`
  ${centerFelx}
  width: 20rem;
  height: 20rem;

  border-radius: 10px;
`;

const TwoButtonStyle = styled.button`
  ${centerFelx}
  width: 25rem;
  height: 25rem;

  border-radius: 10px;
`;

export const St = {
  centerFelx,
  BtnWrapper,
  WrapperForThree,
  FlexColumnCenter,
  FlexRowCenter,
  ThreeButtonStyle,
  TwoButtonStyle,
};
