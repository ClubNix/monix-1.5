import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size ? size.width : "40%",
          height: size ? size.height : "50%",
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default NixModal;
