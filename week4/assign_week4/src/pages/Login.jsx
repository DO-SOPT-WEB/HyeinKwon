import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import LoginBtn from "../components/Login/LoginBtn";
import GotoJoinBtn from "../components/Login/GotoJoinBtn";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  function handleUserId(e) {
    setIdValue(e.target.value);
  }

  function handleUserPw(e) {
    setPwValue(e.target.value);
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/sign-in`,
        {
          username: idValue,
          password: pwValue,
        }
      );
      const { data } = response;
      navigate(`/mypage/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LayoutStyle>
      <Header>LOGIN</Header>
      <InputBox
        title="ID"
        placeholdText={placeholder.ID_HOLDER}
        onChange={handleUserId}
      />
      <InputBox
        title="PASSWORD"
        placeholdText={placeholder.PW_HOLDER}
        onChange={handleUserPw}
      />
      <LoginBtn onClick={handleLogin} />
      <GotoJoinBtn />
    </LayoutStyle>
  );
}
