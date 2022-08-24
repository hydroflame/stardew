import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

import { Location, Season } from "./enums";
import { FishCollectionModal } from "./FishCollectionModal";
import { Fish, Fishes } from "./Fish";
import { Division } from "./Division";
import { CookingCollectionModal } from "./CookingCollectionModal";
import { Collections } from "./Collections";
import { Load, Save } from "./Save";
import { FishPage } from "./FishPage";

const App = (): React.ReactElement => {
  const [collections, setCollections] = useState<Collections>(Load());
  const [season, setSeason] = useState<Season>(Season.SPRING);
  const [fishOpen, setFishOpen] = useState(false);
  const [cookingOpen, setCookingOpen] = useState(false);

  useEffect(() => {
    Save(collections);
  }, [collections]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stardew perfection tracker
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
          collections={collections}
          setCollection={setCollections}
        />
        <CookingCollectionModal
          open={cookingOpen}
          onClose={() => setCookingOpen(false)}
          collections={collections}
          setCollection={setCollections}
        />
        <Box
          sx={{
            backgroundColor: "#282c34",
            color: "white",
          }}
        >
          <FishPage
            season={season}
            collections={collections}
            setCollections={setCollections}
          />
        </Box>
      </div>
    </Box>
  );
};

export default App;
