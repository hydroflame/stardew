import React from "react";
import { FishCollectionButton } from "./FishCollectionButton";
import { Fish, Fishes } from "./Fish";
import { CollectionModal } from "./CollectionModal";
import { Collections } from "./Collections";
import { splitChunk } from "./utils";

interface IProps {
  open: boolean;
  onClose: () => void;
  collections: Collections;
  setCollection: (o: (old: Collections) => Collections) => void;
}

export const FishCollectionModal = ({
  open,
  onClose,
  collections,
  setCollection,
}: IProps): React.ReactElement => {
  const onFishClick = (fishName: string) => {
    setCollection((old: Collections): Collections => {
      return {
        ...old,
        fishes: { ...old.fishes, [fishName]: !old.fishes[fishName] },
      };
    });
  };
  const lines: Fish[][] = splitChunk(Fishes, 10);
  return (
    <CollectionModal open={open} onClose={onClose}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex" }}>
          {line.map((f) => (
            <FishCollectionButton
              key={f.Name}
              fish={f}
              acquired={collections.fishes[f.Name]}
              onClick={() => onFishClick(f.Name)}
            />
          ))}
        </div>
      ))}
    </CollectionModal>
  );
};
