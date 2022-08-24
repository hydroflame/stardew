import React from "react";
import { Collections } from "./Collections";
import { Division } from "./Division";
import { Location, Season } from "./enums";
import { Fish, Fishes } from "./Fish";

interface IProps {
  season: Season;
  collections: Collections;
  setCollections: (o: (old: Collections) => Collections) => void;
}
const splitArray = <T,>(array: T[], split: (t: T) => boolean): [T[], T[]] => {
  const good = [];
  const bad = [];
  for (const t of array) {
    if (split(t)) {
      good.push(t);
    } else {
      bad.push(t);
    }
  }
  return [good, bad];
};

export const FishPage = ({
  collections,
  setCollections,
  season,
}: IProps): React.ReactElement => {
  const onCaught = (fish: Fish) => {
    setCollections((old: Collections): Collections => {
      return {
        ...old,
        fishes: { ...old.fishes, [fish.Name]: !old.fishes[fish.Name] },
      };
    });
  };
  // Find all missing fish first
  const allMissing: Fish[] = [];
  for (const [name, caught] of Object.entries(collections.fishes)) {
    if (caught) continue;
    const fish = Fishes.find((f) => f.Name === name);
    if (!fish) continue;
    allMissing.push(fish);
  }
  let others = allMissing.filter((m) => m.Seasons.includes(season));
  let oneSeason: Fish[];
  [oneSeason, others] = splitArray(others, (f) => f.Seasons.length === 1);
  let crabPot: Fish[];
  [crabPot, others] = splitArray(
    others,
    (f) =>
      f.Locations.length === 1 && String(f.Locations[0]).startsWith("Crab Pot")
  );
  const gingerIslandLocations = [
    Location.GINGER_ISLAND,
    Location.GINGER_ISLAND_POND,
    Location.GINGER_ISLAND_RIVER,
    Location.PIRATE_COVE,
  ];
  let gingerIsland: Fish[] = [];
  [gingerIsland, others] = splitArray(
    others,
    (f) =>
      f.Locations.length === 1 && gingerIslandLocations.includes(f.Locations[0])
  );
  let allSeasons: Fish[] = [];
  [allSeasons, others] = splitArray(others, (f) => f.Seasons.length === 4);
  return (
    <>
      {oneSeason.length > 0 && (
        <Division
          title={`${season} only`}
          fishes={oneSeason}
          onCaught={onCaught}
        />
      )}
      {others.length > 0 && (
        <Division title={`Multi seasons`} fishes={others} onCaught={onCaught} />
      )}
      {allSeasons.length > 0 && (
        <Division
          title={`All seasons`}
          fishes={allSeasons}
          onCaught={onCaught}
        />
      )}
      {crabPot.length > 0 && (
        <Division title={`Crab Pot`} fishes={crabPot} onCaught={onCaught} />
      )}
      {gingerIsland.length > 0 && (
        <Division
          title={`Ginger Island`}
          fishes={gingerIsland}
          onCaught={onCaught}
        />
      )}
    </>
  );
};
