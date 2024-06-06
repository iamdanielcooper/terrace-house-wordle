import React, { CSSProperties } from "react";

interface Props {
  closeModal: () => void;
}

function ModalControls({ closeModal }: Props) {
  return <button onClick={closeModal}>Close</button>;
}

export default ModalControls;
