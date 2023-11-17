import axios from "axios";
import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import SignupBtn from "../components/Signup/SignupBtn";
import IdInputBox from "../components/Signup/IdInputBox";
import { useCallback, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  idValue: "",
  pwValue: "",
  pwCheckValue: "",
  nameValue: "",
  isExist: 0,
  isPwValid: false,
  disabled: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ID":
      return { ...state, idValue: action.payload };
    case "SET_PW":
      return { ...state, pwValue: action.payload };
    case "SET_PW_CHECK":
      return { ...state, pwCheckValue: action.payload };
    case "SET_NAME":
      return { ...state, nameValue: action.payload };
    case "SET_EXIST":
      return { ...state, isExist: action.payload };
    case "SET_PW_VALID":
      return { ...state, isPwValid: action.payload };
    case "SET_DISABLED":
      return { ...state, disabled: action.payload };
    default:
      return state;
  }
};

export default function Signup() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSignup = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/v1/members`, {
        username: state.idValue,
        nickname: state.nameValue,
        password: state.pwValue,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  //비밀번호 확인
  const pwConfirm = useCallback(() => {
    if (
      !state.pwValue ||
      !state.pwCheckValue ||
      state.pwValue != state.pwCheckValue
    ) {
      dispatch({ type: "SET_PW_VALID", payload: false });
    } else if (
      state.pwValue &&
      state.pwCheckValue &&
      state.pwValue == state.pwCheckValue
    ) {
      dispatch({ type: "SET_PW_VALID", payload: true });
    }
  }, [state.pwValue, state.pwValue, state.pwCheckValue]);

  useEffect(() => {
    pwConfirm();
  }, [pwConfirm]);

  //회원가입 버튼
  useEffect(() => {
    const trimmedId = state.idValue.trim();
    const trimmedPw = state.pwValue.trim();
    const trimmedName = state.nameValue.trim();
    if (
      !trimmedId ||
      !trimmedPw ||
      !trimmedName ||
      state.isExist === 0 ||
      state.isExist ||
      !state.isPwValid
    ) {
      dispatch({ type: "SET_DISABLED", payload: true });
    } else {
      dispatch({ type: "SET_DISABLED", payload: false });
    }
  }, [
    state.idValue,
    state.pwValue,
    state.nameValue,
    state.isExist,
    state.isPwValid,
  ]);

  return (
    <LayoutStyle>
      <Header>Sign Up</Header>
      <div>
        <IdInputBox
          isExist={state.isExist}
          setIsExist={(isExist) =>
            dispatch({ type: "SET_EXIST", payload: isExist })
          }
          value={state.idValue}
          onChange={(e) =>
            dispatch({ type: "SET_ID", payload: e.target.value })
          }
          title="ID"
          placeholdText={placeholder.ID_HOLDER}
        />
      </div>
      <InputBox
        value={state.pwValue}
        onChange={(e) => dispatch({ type: "SET_PW", payload: e.target.value })}
        title="비밀번호"
        placeholdText={placeholder.PW_HOLDER}
      />
      <InputBox
        value={state.pwCheckValue}
        onChange={(e) =>
          dispatch({ type: "SET_PW_CHECK", payload: e.target.value })
        }
        title="비밀번호 확인"
        placeholdText={placeholder.PW_COMFIRM_HOLDER}
      />
      <InputBox
        value={state.nameValue}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
        title="닉네임"
        placeholdText={placeholder.NICKNAME_HOLDER}
      />
      <SignupBtn disabled={state.disabled} onClick={handleSignup} />
    </LayoutStyle>
  );
}
