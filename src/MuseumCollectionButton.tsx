import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Artefact } from "./Artefact";
import { StardewBox } from "./Box";

interface IProps {
  artefact: Artefact;
  onClick?: () => void;
  acquired?: boolean;
}

const notAcquiredStyle = {
  filter: "opacity(0.25)",
};

export const MuseumCollectionButton = ({
  artefact,
  acquired,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <Tooltip
        components={{ Tooltip: StardewBox }}
        title={<Typography color="secondary">{artefact.Name}</Typography>}
      >
        <img
          draggable={false}
          style={!acquired ? notAcquiredStyle : undefined}
          onClick={onClick}
          src={artefact.Image}
          alt={artefact.Name}
        />
      </Tooltip>
    </div>
  );
};
