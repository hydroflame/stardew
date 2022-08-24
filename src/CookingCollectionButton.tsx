import React from "react";
import { Recipe } from "./Recipe";

interface IProps {
  recipe: Recipe;
  onClick?: () => void;
  acquired?: boolean;
}

const notAcquiredStyle = {
  filter: "opacity(0.25)",
};

export const CookingCollectionButton = ({
  recipe,
  acquired,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <img
        draggable={false}
        style={!acquired ? notAcquiredStyle : undefined}
        onClick={onClick}
        src={recipe.Image}
        alt={recipe.Name}
      />
    </div>
  );
};
