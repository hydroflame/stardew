import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Season } from "./enums";
import { CollectionModal } from "./CollectionModal";
import { Fishes } from "./Fish";
import { FishCard } from "./FishCard";

const initialCollection = (): Record<string, boolean> => {
  const collection: Record<string, boolean> = {};
  for (const fish of Fishes) {
    collection[fish.Name] = false;
  }
  return collection;
};

function App() {
  const [collection, setCollection] = useState<Record<string, boolean>>(
    initialCollection()
  );
  const [season, setSeason] = useState<Season>(Season.SPRING);
  const [open, setOpen] = useState(false);

  const missing = (): string[] => {
    const allMissing: string[] = [];
    for (const [name, caught] of Object.entries(collection)) {
      if (caught) continue;
      allMissing.push(name);
    }
    const seasonal = allMissing.filter((m) =>
      Fishes.find((f) => f.Name === m)?.Seasons.includes(season)
    );
    return seasonal;
  };
  const onCaught = (fishName: string) => {
    setCollection((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fishName]: !old[fishName] };
    });
  };
  return (
    <div className="App">
      <CollectionModal
        open={open}
        onClose={() => setOpen(false)}
        collection={collection}
        setCollection={setCollection}
      />
      <header className="App-header">
        <Button onClick={() => setOpen(true)}>Open collection</Button>
        <Select
          value={season}
          onChange={(s) => setSeason(s.target.value as Season)}
        >
          <MenuItem value={Season.SPRING}>{Season.SPRING}</MenuItem>
          <MenuItem value={Season.SUMMER}>{Season.SUMMER}</MenuItem>
          <MenuItem value={Season.FALL}>{Season.FALL}</MenuItem>
          <MenuItem value={Season.WINTER}>{Season.WINTER}</MenuItem>
        </Select>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {missing().map((n) => (
            <FishCard
              key={n}
              fish={Fishes.find((f) => f.Name === n)!}
              onCaught={() => onCaught(n)}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
