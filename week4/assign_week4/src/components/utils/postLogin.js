import axios from "axios";

export default async function postLogin(props) {
  const { idValue, pwValue } = props;

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/sign-in`,
      {
        username: idValue,
        password: pwValue,
      }
    );
    console.log("성공");
    return response;
  } catch (error) {
    console.error("로그인 실패", error.message);
  }
}
