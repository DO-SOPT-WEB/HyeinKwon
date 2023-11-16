import { St } from "../../styles/common/commonStyle";
import FlagBox from "./FlagBox";
export default function InputBox(props) {
  const { onChange, value, title, placeholdText } = props;
  return (
    <St.InputFlagWrapper>
      <FlagBox text={title} />
      <St.Input
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholdText}
      />
    </St.InputFlagWrapper>
  );
}
