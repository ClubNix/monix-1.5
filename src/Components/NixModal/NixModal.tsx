import { Modal } from "@mui/material";
import * as React from "react";
import "./NixModal.css";

export type NixModalProps = {
  open: boolean;
  onClose: () => void;
  size?: { width: string; height: string };
};

/** Wrapper pour un composant Modal */
const NixModal = ({
  children,
  open,
  onClose,
  size,
}: React.PropsWithChildren<NixModalProps>) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="nix-modal"
        style={{ width: size?.width, height: size?.height }}
      >
        {children}
      </div>
    </Modal>
  );
};

export default NixModal;
