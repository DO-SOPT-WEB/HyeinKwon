import { HeaderText } from "../../styles/common/commonTextStyle";

export default function Header({ children }) {
  return (
    <>
      <HeaderText>{children}</HeaderText>
    </>
  );
}
