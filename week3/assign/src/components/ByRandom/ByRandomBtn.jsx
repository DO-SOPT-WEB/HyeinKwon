import styled from "styled-components";
import ByRandomStart from "./ByRandomStart";
export default function ByRandomBtn(props) {
  // eslint-disable-next-line react/prop-types
  const { isByType, setIsByRandom, isByRandom, handleStart, isStart } = props;
  function handleClick() {
    setIsByRandom((prev) => !prev);
  }

  return (
    <>
      {!isByRandom && !isByType && (
        <>
          <Button onClick={handleClick}>랜덤 추천</Button>
        </>
      )}
      {isByRandom && (
        <ByRandomStart isStart={isStart} handleStart={handleStart} />
      )}
      {isByType && null}
    </>
  );
}

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
