import React from "react";
import { Fish } from "./Fish";

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
      <img
        draggable={false}
        style={!acquired ? notAcquiredStyle : undefined}
        onClick={onClick}
        src={fish.Image}
        alt={fish.Name}
      />
    </div>
  );
};
