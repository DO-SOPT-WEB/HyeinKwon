import styled from "styled-components";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import LoginBtn from "../components/Login/LoginBtn";
import GotoJoinBtn from "../components/Login/GotoJoinBtn";
export default function Login() {
  return (
    <LayoutStyle>
      <Header>LOGIN</Header>
      <InputBox title="ID" placeholdText={placeholder.ID_HOLDER} />
      <InputBox title="PASSWORD" placeholdText={placeholder.PW_HOLDER} />
      <LoginBtn />
      <GotoJoinBtn />
    </LayoutStyle>
  );
}
