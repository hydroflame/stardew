import AnchovyImg from "./img/Anchovy.png";
import PufferfishImg from "./img/Pufferfish.png";
import TunaImg from "img/Tuna.png";
import SardineImg from "img/Sardine.png";
import BreamImg from "img/Bream.png";
import SalmonImg from "img/Salmon.png";
import WalleyeImg from "img/Walleye.png";
import LargemouthBassImg from "img/Largemouth_Bass.png";
import SmallmouthBassImg from "img/Smallmouth_Bass.png";
import RainbowTroutImg from "img/Rainbow_Trout.png";
export interface Fish {
  Name: string;
  Image: string;
}

export const Fishes: Fish[] = [
  { Name: "Pufferfish", Image: PufferfishImg },
  { Name: "Anchovy", Image: AnchovyImg },
  { Name: "Tuna", Image: TunaImg },
  { Name: "Sardine", Image: SardineImg },
  { Name: "Bream", Image: BreamImg },
  { Name: "Largemouth Bass", Image: LargemouthBassImg },
  { Name: "Smallmouth Bass", Image: SmallmouthBassImg },
  { Name: "Rainbow Trout", Image: RainbowTroutImg },
  { Name: "Salmon", Image: SalmonImg },
  { Name: "Walleye", Image: WalleyeImg },
];
