import React from "react";
import { Typography } from "@mui/material";
import { FishCard } from "./FishCard";
import { Fish } from "./Fish";

interface IProps {
  title: string;
  fishes: Fish[];
  onCaught: (f: Fish) => void;
}

export const Division = ({
  title,
  fishes,
  onCaught,
}: IProps): React.ReactElement => {
  return (
    <>
      <Typography variant="h3">{title}</Typography>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fishes.map((fish) => (
          <FishCard
            key={fish.Name}
            fish={fish}
            onCaught={() => onCaught(fish)}
          />
        ))}
      </div>
    </>
  );
};
