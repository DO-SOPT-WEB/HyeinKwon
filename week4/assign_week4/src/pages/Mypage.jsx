import { LayoutStyle } from "../styles/layout/LayoutStyle";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import UserPic from "../components/Mypage/UserPic";
import UserInform from "../components/Mypage/UserInform";
import LogoutBtn from "../components/Mypage/LogoutBtn";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Mypage() {
  const [userData, setUserData] = useState("");
  const { userId } = useParams();

  const getMypage = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/${userId}`,
        {
          userId: userId,
        }
      );
      const { data } = response;
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMypage();
  }, []);

  return (
    <LayoutStyle>
      <Header>MY PAGE</Header>
      <UserPic />
      <UserInform inform="ID" text={userData.nickname} />
      <UserInform inform="닉네임" text={userData.username} />
      <LogoutBtn />
    </LayoutStyle>
  );
}
