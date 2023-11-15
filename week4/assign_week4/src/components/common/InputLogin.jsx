import { St } from "../../styles/common/commonStyle";
import FlagBox from "./FlagBox";
export default function InputBox(props) {
  const { title, placeholdText } = props;
  return (
    <St.InputFlagWrapper>
      <FlagBox text={title} />
      <St.Input type="text" placeholder={placeholdText} />
    </St.InputFlagWrapper>
  );
}
