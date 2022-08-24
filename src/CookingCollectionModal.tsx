import React from "react";
import { CollectionModal } from "./CollectionModal";
import { Recipe } from "./Recipe";
import { Recipes } from "./data/Recipes";
import { CookingCollectionButton } from "./CookingCollectionButton";

interface IProps {
  open: boolean;
  onClose: () => void;
  collection: Record<string, boolean>;
  setCollection: (
    o: (old: Record<string, boolean>) => Record<string, boolean>
  ) => void;
}

export const CookingCollectionModal = ({
  open,
  onClose,
  collection,
  setCollection,
}: IProps): React.ReactElement => {
  const lines: Recipe[][] = [];
  const chunkSize = 10;
  for (let i = 0; i < Recipes.length; i += chunkSize) {
    lines.push(Recipes.slice(i, i + chunkSize));
  }
  return (
    <CollectionModal open={open} onClose={onClose}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex" }}>
          {line.map((f) => (
            <CookingCollectionButton
              key={f.Name}
              recipe={f}
              acquired={true}
              onClick={() => undefined}
            />
          ))}
        </div>
      ))}
    </CollectionModal>
  );
};
