import { LayoutStyle } from "../../styles/layout/LayoutStyle";
import styled from "styled-components";
import ModalPortal from "./ModalPortal";
import ToastModal from "./ToastModal";

export default function Modal({ children }) {
  return (
    <ModalPortal>
      <ModalLayout>
        <ToastModal message={children} />
      </ModalLayout>
    </ModalPortal>
  );
}

const ModalLayout = styled(LayoutStyle)`
  height: 3vh;
`;
