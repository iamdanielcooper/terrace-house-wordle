import React, { CSSProperties, ReactNode, useState } from "react";
import { ModalControls } from "./Components";

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const closeModal = () => setIsDisplayed(false);

  const contentStyle: CSSProperties = {
    width: "80vw",
    height: "80vh"
  };

  const containerStyle: CSSProperties = {
    display: isDisplayed ? "flex" : "none",
    position: "absolute",
    top: "0",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.8)"
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {children}
        <ModalControls closeModal={closeModal} />
      </div>
    </div>
  );
}

export default Modal;
