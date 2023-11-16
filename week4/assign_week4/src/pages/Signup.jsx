import axios from "axios";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import SignupBtn from "../components/Signup/SignupBtn";
import IdInputBox from "../components/Signup/IdInputBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwCheckValue, setPwCheckValue] = useState("");
  const [nameValue, setNamevalue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isExist, setIsExist] = useState(0);

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members`,
        {
          username: idValue,
          nickname: nameValue,
          password: pwValue,
        }
      );
      const { data } = response;
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const trimmedId = idValue.trim();
    const trimmedPw = pwValue.trim();
    const trimmedName = nameValue.trim();

    if (!trimmedId || !trimmedPw || !trimmedName || isExist === 0 || isExist) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [idValue, pwValue, nameValue, isExist]);

  return (
    <LayoutStyle>
      <Header>Sign Up</Header>
      <div>
        <IdInputBox
          isExist={isExist}
          setIsExist={setIsExist}
          value={idValue}
          onChange={(e) => setIdValue(e.target.value)}
          title="ID"
          placeholdText={placeholder.ID_HOLDER}
        />
      </div>
      <InputBox
        value={pwValue}
        onChange={(e) => setPwValue(e.target.value)}
        title="비밀번호"
        placeholdText={placeholder.PW_HOLDER}
      />
      <InputBox
        onChange={(e) => setPwValue(e.target.value)}
        title="비밀번호 확인"
        placeholdText={placeholder.PW_COMFIRM_HOLDER}
      />
      <InputBox
        value={nameValue}
        onChange={(e) => setNamevalue(e.target.value)}
        title="닉네임"
        placeholdText={placeholder.NICKNAME_HOLDER}
      />
      <SignupBtn disabled={disabled} onClick={handleSignup} />
    </LayoutStyle>
  );
}
