import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Location, Season } from "./enums";
import { FishCollectionModal } from "./FishCollectionModal";
import { Fish, Fishes } from "./Fish";
import { Division } from "./Division";
import { CookingCollectionModal } from "./CookingCollectionModal";

const initialCollection = (): Record<string, boolean> => {
  const collection: Record<string, boolean> = {};
  for (const fish of Fishes) {
    collection[fish.Name] = false;
  }
  return collection;
};

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

const App = (): React.ReactElement => {
  const [collection, setCollection] = useState<Record<string, boolean>>(
    initialCollection()
  );
  const [season, setSeason] = useState<Season>(Season.SPRING);
  const [fishOpen, setFishOpen] = useState(false);
  const [cookingOpen, setCookingOpen] = useState(false);

  const onCaught = (fish: Fish) => {
    setCollection((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fish.Name]: !old[fish.Name] };
    });
  };
  // Find all missing fish first
  const allMissing: Fish[] = [];
  for (const [name, caught] of Object.entries(collection)) {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stardew fishing list
          </Typography>
          <Button onClick={() => setFishOpen(true)}>
            <Typography color="secondary">Open Fish collection</Typography>
          </Button>
          <Button onClick={() => setCookingOpen(true)}>
            <Typography color="secondary">Open Cooking collection</Typography>
          </Button>
          <Select
            value={season}
            onChange={(s) => setSeason(s.target.value as Season)}
          >
            <MenuItem value={Season.SPRING}>{Season.SPRING}</MenuItem>
            <MenuItem value={Season.SUMMER}>{Season.SUMMER}</MenuItem>
            <MenuItem value={Season.FALL}>{Season.FALL}</MenuItem>
            <MenuItem value={Season.WINTER}>{Season.WINTER}</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <div className="App">
        <FishCollectionModal
          open={fishOpen}
          onClose={() => setFishOpen(false)}
          collection={collection}
          setCollection={setCollection}
        />
        <CookingCollectionModal
          open={cookingOpen}
          onClose={() => setCookingOpen(false)}
          collection={collection}
          setCollection={setCollection}
        />
        <header className="App-header">
          {oneSeason.length > 0 && (
            <Division
              title={`${season} only`}
              fishes={oneSeason}
              onCaught={onCaught}
            />
          )}
          {others.length > 0 && (
            <Division
              title={`Multi seasons`}
              fishes={others}
              onCaught={onCaught}
            />
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
        </header>
      </div>
    </Box>
  );
};

export default App;
