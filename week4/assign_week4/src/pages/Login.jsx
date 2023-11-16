import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import InputBox from "../components/common/InputBox";
import { placeholder } from "../constants/placeholders";
import LoginBtn from "../components/Login/LoginBtn";
import GotoJoinBtn from "../components/Login/GotoJoinBtn";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

export default function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
    } catch (ex) {
      if (ex.response.status === 400) {
        console.log("비밀번호로 인한 로그인실패!");
        setShowModal(true);
        setModalMessage(ex.response.data.message);
      } else {
        console.log("axios 에러");
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

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
      {showModal && <Modal>{modalMessage}</Modal>}
    </LayoutStyle>
  );
}
