import React, { useState } from "react";
import logo from "./img/background.png";
import "./App.css";
import { FishButton } from "./FishButton";
import { Fishes } from "./Fish";

function App() {
  const [caught, setCaught] = useState<Record<string, boolean>>({});

  const onFishClick = (fishName: string) => {
    setCaught((old: Record<string, boolean>): Record<string, boolean> => {
      return { ...old, [fishName]: !old[fishName] };
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "510px",
            height: "387px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "510px 387px",
          }}
        >
          <div style={{ margin: "15px", display: "flex" }}>
            {Fishes.map((f) => (
              <FishButton
                fish={f}
                acquired={caught[f.Name]}
                onClick={() => onFishClick(f.Name)}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
