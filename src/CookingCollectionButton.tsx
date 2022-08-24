import React from "react";
import { Recipe } from "./Recipe";
import { CookingState } from "./RecipeState";

interface IProps {
  recipe: Recipe;
  onClick?: () => void;
  state: CookingState;
}

const styles = {
  [CookingState.LOCKED]: {
    filter: "brightness(.05) opacity(0.2)",
  },
  [CookingState.ACQUIRED]: {
    filter: "opacity(0.25)",
  },
  [CookingState.COOKED]: {
    filter: "",
  },
};

export const CookingCollectionButton = ({
  recipe,
  state,
  onClick,
}: IProps): React.ReactElement => {
  return (
    <div>
      <img
        draggable={false}
        style={styles[state]}
        onClick={onClick}
        src={recipe.Image}
        alt={recipe.Name}
      />
    </div>
  );
};
