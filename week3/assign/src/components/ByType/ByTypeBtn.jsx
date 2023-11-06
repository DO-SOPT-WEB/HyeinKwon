import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function ByTypeBtn(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const { isByType, isByRandom, setIsByType } = props;
  function handleClick() {
    console.log("here");
    setIsByType((prev) => !prev);
  }

  return (
    <>
      {!isByRandom && !isByType && (
        <Button onClick={handleClick}>취향대로 추천</Button>
      )}
      {!isByRandom && isByType && <ButtonLager>취향대로 추천</ButtonLager>}
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

const ButtonLager = styled(Button)`
  width: 50rem;
`;
