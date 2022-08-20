import React from "react";
import { Fish } from "./Fish";

interface IProps {
  fish: Fish;
  onClick?: () => void;
  acquired?: boolean;
}

const notAcquiredStyle = {
  filter: "brightness(0.1)",
};

export const CollectionButton = ({
  fish,
  acquired,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <img
        style={!acquired ? notAcquiredStyle : undefined}
        onClick={onClick}
        src={fish.Image}
        alt={fish.Name}
      />
    </div>
  );
};
