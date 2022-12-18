import { Typography } from "@mui/material";
import React from "react";
import { Artefact } from "./Artefact";
import { ArtefactButton } from "./ArtefactCard";
import { Collections } from "./Collections";
import { Artefacts } from "./data/Artefacts";

import { ShippingItem } from "./ShippingItem";

interface IProps {
  collections: Collections;
  setCollections: (o: (old: Collections) => Collections) => void;
}

export const MuseumPage = ({
  collections,
  setCollections,
}: IProps): React.ReactElement => {
  const onDonated = (item: Artefact) => {
    setCollections((old: Collections): Collections => {
      return {
        ...old,
        artefacts: { ...old.artefacts, [item.Name]: !old.artefacts[item.Name] },
      };
    });
  };

  const missing = Artefacts.filter((a) => !collections.artefacts[a.Name]);
  const byLocation: Record<string, Artefact[]> = {};
  missing.forEach((a) => {
    a.Sources.forEach((s) => {
      byLocation[s[0]] = (byLocation[s[0]] ?? []).concat([a as Artefact]);
    });
  });

  const entries = Object.entries(byLocation);

  return (
    <>
      {entries.map(([location, artefacts]) => (
        <React.Fragment key={location}>
          <Typography variant="h3" sx={{ justifyContent: "center" }}>
            {location}
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {artefacts.map((artefact) => (
              <ArtefactButton
                key={artefact.Name}
                onClick={() => onDonated(artefact)}
                artefact={artefact}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
