import React from "react";
import { CollectionButton } from "./CollectionButton";
import { Fish, Fishes } from "./Fish";
import { CollectionModal } from "./CollectionModal";

interface IProps {
  open: boolean;
  onClose: () => void;
  collection: Record<string, boolean>;
  setCollection: (
    o: (old: Record<string, boolean>) => Record<string, boolean>
  ) => void;
}

export const FishCollectionModal = ({
  open,
  onClose,
  collection,
  setCollection,
}: IProps): React.ReactElement => {
  const onFishClick = (fishName: string) => {
    setCollection((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fishName]: !old[fishName] };
    });
  };
  const lines: Fish[][] = [];
  const chunkSize = 10;
  for (let i = 0; i < Fishes.length; i += chunkSize) {
    lines.push(Fishes.slice(i, i + chunkSize));
  }
  return (
    <CollectionModal open={open} onClose={onClose}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex" }}>
          {line.map((f) => (
            <CollectionButton
              key={f.Name}
              fish={f}
              acquired={collection[f.Name]}
              onClick={() => onFishClick(f.Name)}
            />
          ))}
        </div>
      ))}
    </CollectionModal>
  );
};
