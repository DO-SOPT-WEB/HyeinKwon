import styled from "styled-components";
import StartByType from "./StartByType";

export default function ByTypeBtn(props) {
  // eslint-disable-next-line react/prop-types
  const { isByType, isByRandom, setIsByType, isStart, handleStart } = props;
  function handleClick() {
    console.log("here");
    setIsByType((prev) => !prev);
  }

  return (
    <>
      {!isByRandom && !isByType && (
        <Button onClick={handleClick}>취향대로 추천</Button>
      )}
      {!isByRandom && isByType && (
        <StartByType isStart={isStart} handleStart={handleStart} />
      )}
      {isByRandom && <></>}
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
