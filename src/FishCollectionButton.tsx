import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { Fish } from "./Fish";
import { StardewBox } from "./Box";

interface IProps {
  fish: Fish;
  onClick?: () => void;
  acquired?: boolean;
}

const notAcquiredStyle = {
  filter: "opacity(0.25)",
};

export const FishCollectionButton = ({
  fish,
  acquired,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <Tooltip
        components={{ Tooltip: StardewBox }}
        title={<Typography color="secondary">{fish.Name}</Typography>}
      >
        <img
          draggable={false}
          style={!acquired ? notAcquiredStyle : undefined}
          onClick={onClick}
          src={fish.Image}
          alt={fish.Name}
        />
      </Tooltip>
    </div>
  );
};
