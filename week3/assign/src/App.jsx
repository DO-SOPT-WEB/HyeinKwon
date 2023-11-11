import styled from "styled-components";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
import { useState } from "react";

function App() {
  const [isFirstStep, setIsFirstStep] = useState(true);

  function handleGotoFirstPage() {
    setIsFirstStep(true);
  }

  return (
    <Wrapper>
      <Header
        isFirstStep={isFirstStep}
        setIsFirstStep={setIsFirstStep}
        handleGotoFirstPage={handleGotoFirstPage}
      />

      <MainWrapper isFirstStep={isFirstStep} setIsFirstStep={setIsFirstStep} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  background-color: ${({ theme }) => theme.colors.background};
`;
