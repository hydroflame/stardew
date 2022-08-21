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
import { CollectionModal } from "./CollectionModal";
import { Fish, Fishes } from "./Fish";
import { FishCard } from "./FishCard";

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

function App() {
  const [collection, setCollection] = useState<Record<string, boolean>>(
    initialCollection()
  );
  const [season, setSeason] = useState<Season>(Season.SPRING);
  const [open, setOpen] = useState(false);

  const onCaught = (fishName: string) => {
    setCollection((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fishName]: !old[fishName] };
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stardew fishing list
          </Typography>
          <Button onClick={() => setOpen(true)}>
            <Typography color="secondary">Open collection</Typography>
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
        <CollectionModal
          open={open}
          onClose={() => setOpen(false)}
          collection={collection}
          setCollection={setCollection}
        />
        <header className="App-header">
          <Typography variant="h3">{season} only</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {oneSeason.map((n) => (
              <FishCard
                key={n.Name}
                fish={n}
                onCaught={() => onCaught(n.Name)}
              />
            ))}
          </div>
          <Typography variant="h3">Multi seasons</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {others.map((n) => (
              <FishCard
                key={n.Name}
                fish={n}
                onCaught={() => onCaught(n.Name)}
              />
            ))}
          </div>
          <Typography variant="h3">All seasons</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {allSeasons.map((n) => (
              <FishCard
                key={n.Name}
                fish={n}
                onCaught={() => onCaught(n.Name)}
              />
            ))}
          </div>

          <Typography variant="h3">Crab Pot</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {crabPot.map((n) => (
              <FishCard
                key={n.Name}
                fish={n}
                onCaught={() => onCaught(n.Name)}
              />
            ))}
          </div>
          <Typography variant="h3">Ginger Island</Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {gingerIsland.map((n) => (
              <FishCard
                key={n.Name}
                fish={n}
                onCaught={() => onCaught(n.Name)}
              />
            ))}
          </div>
        </header>
      </div>
    </Box>
  );
}

export default App;
