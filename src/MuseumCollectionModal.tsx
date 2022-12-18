import React from "react";
import { FishCollectionButton } from "./FishCollectionButton";
import { Fish, Fishes } from "./Fish";
import { CollectionModal } from "./CollectionModal";
import { Collections } from "./Collections";
import { splitChunk } from "./utils";
import { MuseumCollectionButton } from "./MuseumCollectionButton";
import { Artefact } from "./Artefact";
import { Artefacts } from "./data/Artefacts";

interface IProps {
  open: boolean;
  onClose: () => void;
  collections: Collections;
  setCollection: (o: (old: Collections) => Collections) => void;
}

export const MuseumCollectionModal = ({
  open,
  onClose,
  collections,
  setCollection,
}: IProps): React.ReactElement => {
  const onDonationClick = (donation: string) => {
    setCollection((old: Collections): Collections => {
      return {
        ...old,
        artefacts: { ...old.artefacts, [donation]: !old.artefacts[donation] },
      };
    });
  };
  const lines: Artefact[][] = splitChunk(Artefacts as Artefact[], 10);
  return (
    <CollectionModal open={open} onClose={onClose}>
      {lines.map((line, i) => (
        <div key={i} style={{ display: "flex" }}>
          {line.map((a) => (
            <MuseumCollectionButton
              key={a.Name}
              artefact={a}
              acquired={collections.artefacts[a.Name]}
              onClick={() => onDonationClick(a.Name)}
            />
          ))}
        </div>
      ))}
    </CollectionModal>
  );
};
