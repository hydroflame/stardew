import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import logo from "./img/background.png";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const CollectionModal = ({
  open,
  onClose,
  children,
}: IProps): React.ReactElement => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            width: "515px",
            height: "387px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "515px 387px",
          }}
        >
          <div style={{ padding: "15px" }}>{children}</div>
        </div>
      </Box>
    </Modal>
  );
};
