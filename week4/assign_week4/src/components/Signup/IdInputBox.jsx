import { St } from "../../styles/common/commonStyle";
import axios from "axios";
import FlagBox from "../common/FlagBox";
import styled from "styled-components";
import DoubleCheckBtn from "./DoubleCheckBtn";
import { useState } from "react";
export default function IdInputBox(props) {
  const { value, onChange, title, placeholdText, isExist, setIsExist } = props;

  const getMemberInfo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/check`,
        {
          params: {
            username: value,
          },
        }
      );
      const isExistData = response.data.isExist;
      if (isExistData) {
        setIsExist(true);
      } else if (!isExistData) {
        setIsExist(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InputFlagWrapperSignup>
      <FlagBox text={title} />
      <DoubleInputWrapper>
        <InputInSignup
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholdText}
        />
        <DoubleCheckBtn isExist={isExist} onClick={getMemberInfo} />
      </DoubleInputWrapper>
    </InputFlagWrapperSignup>
  );
}

const InputFlagWrapperSignup = styled(St.InputFlagWrapper)`
  width: 40rem;
`;

const InputInSignup = styled(St.Input)`
  width: 25rem;
`;

const DoubleInputWrapper = styled.div`
  ${St.centerFlex};
  gap: 1rem;
`;
