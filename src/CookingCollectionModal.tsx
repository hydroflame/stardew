import React from "react";
import { CollectionModal } from "./CollectionModal";
import { Recipe } from "./Recipe";
import { Recipes } from "./data/Recipes";
import { CookingCollectionButton } from "./CookingCollectionButton";
import { Collections } from "./Collections";
import { splitChunk } from "./utils";
import { Divider } from "@mui/material";
import { CookingState } from "./RecipeState";

interface IProps {
  open: boolean;
  onClose: () => void;
  collections: Collections;
  setCollection: (o: (old: Collections) => Collections) => void;
}

export const CookingCollectionModal = ({
  open,
  onClose,
  collections,
  setCollection,
}: IProps): React.ReactElement => {
  const onCookingClick = (recipeName: string) => {
    setCollection((old: Collections): Collections => {
      const nextState = {
        [CookingState.LOCKED]: CookingState.ACQUIRED,
        [CookingState.ACQUIRED]: CookingState.COOKED,
        [CookingState.COOKED]: CookingState.LOCKED,
      };
      return {
        ...old,
        cooking: {
          ...old.cooking,
          [recipeName]: nextState[old.cooking[recipeName]],
        },
      };
    });
  };
  const lines: Recipe[][] = splitChunk(Recipes, 10);
  const pages: Recipe[][][] = splitChunk(lines, 7);
  return (
    <CollectionModal open={open} onClose={onClose}>
      {pages.map((page, i) => (
        <React.Fragment key={i}>
          {i !== 0 && (
            <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
          )}
          {page.map((line, i) => (
            <div key={i} style={{ display: "flex" }}>
              {line.map((f) => (
                <CookingCollectionButton
                  key={f.Name}
                  recipe={f}
                  state={collections.cooking[f.Name]}
                  onClick={() => onCookingClick(f.Name)}
                />
              ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </CollectionModal>
  );
};
