import AnchovyImg from "./img/Anchovy.png";
import PufferfishImg from "./img/Pufferfish.png";
import TunaImg from "./img/Tuna.png";
import SardineImg from "./img/Sardine.png";
import BreamImg from "./img/Bream.png";
import SalmonImg from "./img/Salmon.png";
import WalleyeImg from "./img/Walleye.png";
import LargemouthBassImg from "./img/Largemouth_Bass.png";
import SmallmouthBassImg from "./img/Smallmouth_Bass.png";
import RainbowTroutImg from "./img/Rainbow_Trout.png";
import { AllSeasons, AllWeather, Location, Season, Weather } from "./enums";
export interface Fish {
  Name: string;
  Image: string;
  Locations: Location[];
  Weathers: Weather[];
  Seasons: Season[];
  Time: string;
}

export const Fishes: Fish[] = [
  {
    Name: "Pufferfish",
    Image: PufferfishImg,
    Locations: [Location.OCEAN],
    Weathers: [Weather.SUNNY],
    Seasons: [Season.SUMMER],
    Time: "	12pm - 4pm",
  },
  {
    Name: "Anchovy",
    Image: AnchovyImg,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL],
    Time: "",
  },
  {
    Name: "Tuna",
    Image: TunaImg,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Sardine",
    Image: SardineImg,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Bream",
    Image: BreamImg,
    Locations: [Location.RIVER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6pm - 2am",
  },
  {
    Name: "Largemouth Bass",
    Image: LargemouthBassImg,
    Locations: [Location.MOUNTAIN_LAKE, Location.WILDERNESS],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6am - 7pm",
  },
  {
    Name: "Smallmouth Bass",
    Image: SmallmouthBassImg,
    Locations: [Location.TOWN_RIVER, Location.FOREST_POND],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL],
    Time: "",
  },
  {
    Name: "Rainbow Trout",
    Image: RainbowTroutImg,
    Locations: [Location.RIVER, Location.MOUNTAIN_LAKE],
    Weathers: [Weather.SUNNY],
    Seasons: [Season.SUMMER],
    Time: "6am - 7pm",
  },
  {
    Name: "Salmon",
    Image: SalmonImg,
    Locations: [Location.RIVER],
    Weathers: AllWeather,
    Seasons: [Season.FALL],
    Time: "6am - 7pm",
  },
  {
    Name: "Walleye",
    Image: WalleyeImg,
    Locations: [
      Location.RIVER,
      Location.MOUNTAIN_LAKE,
      Location.FOREST_POND,
      Location.FOREST_FARM_POND,
    ],
    Weathers: [Weather.RAINY],
    Seasons: [Season.FALL, Season.WINTER],
    Time: "12pm - 2am",
  },
];
