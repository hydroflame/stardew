import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { StardewBox } from "./Box";
import { ShippingItem } from "./ShippingItem";

interface IProps {
  item: ShippingItem;
  onClick?: () => void;
  acquired?: boolean;
}

const notAcquiredStyle = {
  filter: "opacity(0.25)",
};

export const ShippingCollectionButton = ({
  item,
  acquired,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <Tooltip
        components={{ Tooltip: StardewBox }}
        title={<Typography color="secondary">{item.Name}</Typography>}
      >
        <img
          draggable={false}
          style={!acquired ? notAcquiredStyle : undefined}
          onClick={onClick}
          src={item.Image}
          alt={item.Name}
        />
      </Tooltip>
    </div>
  );
};
