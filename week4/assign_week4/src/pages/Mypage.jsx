import { LayoutStyle } from "../styles/layout/LayoutStyle";
import Header from "../components/common/Header";
import UserPic from "../components/Mypage/UserPic";
import UserInform from "../components/Mypage/UserInform";
import LogoutBtn from "../components/Mypage/LogoutBtn";
export default function Mypage() {
  return (
    <LayoutStyle>
      <Header>MY PAGE</Header>
      <UserPic />
      <UserInform text="ID" />
      <UserInform text="ID" />
      <LogoutBtn />
    </LayoutStyle>
  );
}
