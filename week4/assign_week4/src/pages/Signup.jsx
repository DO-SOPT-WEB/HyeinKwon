import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";

import { placeholder } from "../constants/placeholders";
import SignupBtn from "../components/Signup/SignupBtn";
export default function Signup() {
  return (
    <LayoutStyle>
      <Header>Sign Up</Header>
      <InputBox title="ID" placeholdText={placeholder.ID_HOLDER} />
      <InputBox title="비밀번호" placeholdText={placeholder.PW_HOLDER} />
      <InputBox
        title="비밀번호 확인"
        placeholdText={placeholder.PW_COMFIRM_HOLDER}
      />
      <InputBox title="닉네임" placeholdText={placeholder.NICKNAME_HOLDER} />
      <SignupBtn />
    </LayoutStyle>
  );
}
