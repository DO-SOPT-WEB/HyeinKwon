import axios from "axios";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import SignupBtn from "../components/Signup/SignupBtn";
import IdInputBox from "../components/Signup/IdInputBox";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwCheckValue, setPwCheckValue] = useState("");
  const [nameValue, setNamevalue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isExist, setIsExist] = useState(0);
  const [isPwValid, setIsPwValid] = useState(false);

  const handleSignup = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/v1/members`, {
        username: idValue,
        nickname: nameValue,
        password: pwValue,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const pwConfirm = useCallback(() => {
    if (!pwValue || !pwValue || pwValue != pwCheckValue) {
      setIsPwValid(false);
    } else if (pwValue && pwValue && pwValue == pwCheckValue) {
      setIsPwValid((prev) => !prev);
    }
  }, [pwValue, pwValue, pwCheckValue]);

  useEffect(() => {
    pwConfirm();
  }, [pwConfirm]);

  useEffect(() => {
    const trimmedId = idValue.trim();
    const trimmedPw = pwValue.trim();
    const trimmedName = nameValue.trim();

    if (
      !trimmedId ||
      !trimmedPw ||
      !trimmedName ||
      isExist === 0 ||
      isExist ||
      !isPwValid
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [idValue, pwValue, nameValue, isExist, isPwValid]);

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
        value={pwCheckValue}
        onChange={(e) => setPwCheckValue(e.target.value)}
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
