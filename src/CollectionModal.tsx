import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import logo from "./img/background.png";
import { CollectionButton } from "./CollectionButton";
import { Fishes } from "./Fish";

interface IProps {
  open: boolean;
  onClose: () => void;
  collection: Record<string, boolean>;
  setCollection: (
    o: (old: Record<string, boolean>) => Record<string, boolean>
  ) => void;
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
  collection,
  setCollection,
}: IProps): React.ReactElement => {
  const onFishClick = (fishName: string) => {
    setCollection((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fishName]: !old[fishName] };
    });
  };
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
          <div style={{ padding: "15px", display: "flex" }}>
            {Fishes.map((f) => (
              <CollectionButton
                key={f.Name}
                fish={f}
                acquired={collection[f.Name]}
                onClick={() => onFishClick(f.Name)}
              />
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
};
