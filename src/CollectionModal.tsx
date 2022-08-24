import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { StardewBox } from "./Box";

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
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <StardewBox>{children}</StardewBox>
      </Box>
    </Modal>
  );
};
