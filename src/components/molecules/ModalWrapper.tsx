import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  opacity?: string; // Optional prop for additional CSS classes on the modal container
  shouldStayOpenOnOverlayClicked?: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  opacity,
  shouldStayOpenOnOverlayClicked,
  children,
}) => {
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // Close the modal if the overlay is clicked (not the content inside)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 grid place-items-center bg-black ${
        opacity ?? "bg-opacity-85"
      } z-50`}
      onClick={!shouldStayOpenOnOverlayClicked ? handleOverlayClick : undefined}
    >
      {children}
    </div>,
    document.getElementById("root") as HTMLElement,
  );
};

export default Modal;
