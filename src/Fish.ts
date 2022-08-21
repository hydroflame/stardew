import Anchovy from "./img/Anchovy.png";
import Pufferfish from "./img/Pufferfish.png";
import Tuna from "./img/Tuna.png";
import Sardine from "./img/Sardine.png";
import Bream from "./img/Bream.png";
import Salmon from "./img/Salmon.png";
import Walleye from "./img/Walleye.png";
import LargemouthBass from "./img/Largemouth_Bass.png";
import SmallmouthBass from "./img/Smallmouth_Bass.png";
import RainbowTrout from "./img/Rainbow_Trout.png";
import Perch from "./img/Perch.png";
import Carp from "./img/Carp.png";
import Catfish from "./img/Catfish.png";
import Pike from "./img/Pike.png";
import Sunfish from "./img/Sunfish.png";
import RedMullet from "./img/Red_Mullet.png";
import Herring from "./img/Herring.png";
import Eel from "./img/Eel.png";
import Octopus from "./img/Octopus.png";
import RedSnapper from "./img/Red_Snapper.png";
import Squid from "./img/Squid.png";
import Seaweed from "./img/Seaweed.png";
import GreenAlgae from "./img/Green_Algae.png";
import SeaCucumber from "./img/Sea_Cucumber.png";
import SuperCucumber from "./img/Super_Cucumber.png";
import Ghostfish from "./img/Ghostfish.png";
import WhiteAlgae from "./img/White_Algae.png";
import Stonefish from "./img/Stonefish.png";
import Crimsonfish from "./img/Crimsonfish.png";
import Angler from "./img/Angler.png";
import IcePip from "./img/Ice_Pip.png";
import LavaEel from "./img/Lava_Eel.png";
import Legend from "./img/Legend.png";
import Sandfish from "./img/Sandfish.png";
import ScorpionCarp from "./img/Scorpion_Carp.png";
import Flounder from "./img/Flounder.png";
import MidnightCarp from "./img/Midnight_Carp.png";
import MutantCarp from "./img/Mutant_Carp.png";
import Sturgeon from "./img/Sturgeon.png";
import TigerTrout from "./img/Tiger_Trout.png";
import Bullhead from "./img/Bullhead.png";
import Tilapia from "./img/Tilapia.png";
import Chub from "./img/Chub.png";
import Dorado from "./img/Dorado.png";
import Albacore from "./img/Albacore.png";
import Shad from "./img/Shad.png";
import Lingcod from "./img/Lingcod.png";
import Halibut from "./img/Halibut.png";
import Lobster from "./img/Lobster.png";
import Crayfish from "./img/Crayfish.png";
import Crab from "./img/Crab.png";
import Cockle from "./img/Cockle.png";
import Mussel from "./img/Mussel.png";
import Shrimp from "./img/Shrimp.png";
import Snail from "./img/Snail.png";
import Periwinkle from "./img/Periwinkle.png";
import Oyster from "./img/Oyster.png";
import Woodskip from "./img/Woodskip.png";
import Glacierfish from "./img/Glacierfish.png";
import VoidSalmon from "./img/Void_Salmon.png";
import Slimejack from "./img/Slimejack.png";
import MidnightSquid from "./img/Midnight_Squid.png";
import SpookFish from "./img/Spook_Fish.png";
import Blobfish from "./img/Blobfish.png";
import Stingray from "./img/Stingray.png";
import Lionfish from "./img/Lionfish.png";
import BlueDiscus from "./img/Blue_Discus.png";

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
    Image: Pufferfish,
    Locations: [Location.OCEAN],
    Weathers: [Weather.SUNNY],
    Seasons: [Season.SUMMER],
    Time: "	12pm - 4pm",
  },
  {
    Name: "Anchovy",
    Image: Anchovy,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL],
    Time: "Any",
  },
  {
    Name: "Tuna",
    Image: Tuna,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Sardine",
    Image: Sardine,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Bream",
    Image: Bream,
    Locations: [Location.RIVER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6pm - 2am",
  },
  {
    Name: "Largemouth Bass",
    Image: LargemouthBass,
    Locations: [Location.MOUNTAIN_LAKE, Location.WILDERNESS],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6am - 7pm",
  },
  {
    Name: "Smallmouth Bass",
    Image: SmallmouthBass,
    Locations: [Location.TOWN_RIVER, Location.FOREST_POND],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.FALL],
    Time: "Any",
  },
  {
    Name: "Rainbow Trout",
    Image: RainbowTrout,
    Locations: [Location.RIVER, Location.MOUNTAIN_LAKE],
    Weathers: [Weather.SUNNY],
    Seasons: [Season.SUMMER],
    Time: "6am - 7pm",
  },
  {
    Name: "Salmon",
    Image: Salmon,
    Locations: [Location.RIVER],
    Weathers: AllWeather,
    Seasons: [Season.FALL],
    Time: "6am - 7pm",
  },
  {
    Name: "Walleye",
    Image: Walleye,
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
  {
    Name: "Perch",
    Image: Perch,
    Locations: [Location.RIVER, Location.MOUNTAIN_LAKE, Location.FOREST_POND],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "Any",
  },
  {
    Name: "Carp",
    Image: Carp,
    Locations: [
      Location.MOUNTAIN_LAKE,
      Location.SECRET_WOODS,
      Location.THE_SEWER,
      Location.MUTANT_BUG_LAIR,
    ],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Catfish",
    Image: Catfish,
    Locations: [Location.RIVER, Location.SECRET_WOODS, Location.WITCH_SWAMP],
    Weathers: [Weather.RAINY],
    Seasons: [Season.SPRING, Season.FALL],
    Time: "6am - 12am",
  },
  {
    Name: "Pike",
    Image: Pike,
    Locations: [Location.RIVER, Location.FOREST_POND],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.WINTER],
    Time: "Any",
  },
  {
    Name: "Sunfish",
    Image: Sunfish,
    Locations: [Location.RIVER],
    Weathers: [Weather.SUNNY, Weather.WINDY],
    Seasons: [Season.SPRING, Season.SUMMER],
    Time: "6am - 7pm",
  },
  {
    Name: "Red Mullet",
    Image: RedMullet,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.SUMMER],
    Time: "6am - 7pm",
  },
  {
    Name: "Herring",
    Image: Herring,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.WINTER],
    Time: "Any",
  },
  {
    Name: "Eel",
    Image: Eel,
    Locations: [Location.OCEAN],
    Weathers: [Weather.RAINY],
    Seasons: [Season.SPRING, Season.FALL],
    Time: "4pm - 2am",
  },
  {
    Name: "Octopus",
    Image: Octopus,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER],
    Time: "6am - 1pm",
  },
  {
    Name: "Red Snapper",
    Image: RedSnapper,
    Locations: [Location.OCEAN],
    Weathers: [Weather.RAINY],
    Seasons: [Season.SUMMER, Season.FALL],
    Time: "6am - 7pm",
  },
  {
    Name: "Squid",
    Image: Squid,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "6pm - 2am",
  },
  {
    Name: "Seaweed",
    Image: Seaweed,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Green Algae",
    Image: GreenAlgae,
    Locations: [Location.MOUNTAIN_LAKE, Location.RIVER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Sea Cucumber",
    Image: SeaCucumber,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.FALL, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Super Cucumber",
    Image: SuperCucumber,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.FALL],
    Time: "6pm - 2am",
  },
  {
    Name: "Ghostfish",
    Image: Ghostfish,
    Locations: [Location.MINES_F20],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "White Algae",
    Image: WhiteAlgae,
    Locations: [Location.MINES_F20],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Stonefish",
    Image: Stonefish,
    Locations: [Location.MINES_F20],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Crimsonfish",
    Image: Crimsonfish,
    Locations: [Location.CRIMSONFISH],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER],
    Time: "Any",
  },
  {
    Name: "Angler",
    Image: Angler,
    Locations: [Location.ANGLER],
    Weathers: AllWeather,
    Seasons: [Season.FALL],
    Time: "Any",
  },
  {
    Name: "Ice Pip",
    Image: IcePip,
    Locations: [Location.MINES_F60],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Lava Eel",
    Image: LavaEel,
    Locations: [Location.MINES_F100],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Legend",
    Image: Legend,
    Locations: [Location.LEGEND],
    Weathers: [Weather.RAINY],
    Seasons: [Season.SPRING],
    Time: "Any",
  },
  {
    Name: "Sandfish",
    Image: Sandfish,
    Locations: [Location.DESERT],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6am - 8pm",
  },
  {
    Name: "Scorpion Carp",
    Image: ScorpionCarp,
    Locations: [Location.DESERT],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "6am - 8pm",
  },
  {
    Name: "Flounder",
    Image: Flounder,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.SUMMER],
    Time: "6am - 8pm",
  },
  {
    Name: "Midnight Carp",
    Image: MidnightCarp,
    Locations: [
      Location.MOUNTAIN_LAKE,
      Location.FOREST_POND,
      Location.GINGER_ISLAND_POND,
      Location.GINGER_ISLAND_RIVER,
    ],
    Weathers: AllWeather,
    Seasons: [Season.FALL, Season.WINTER],
    Time: "10pm - 2am",
  },
  {
    Name: "Mutant Carp",
    Image: MutantCarp,
    Locations: [Location.THE_SEWER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Sturgeon",
    Image: Sturgeon,
    Locations: [Location.MOUNTAIN_LAKE],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Tiger Trout",
    Image: TigerTrout,
    Locations: [Location.RIVER],
    Weathers: AllWeather,
    Seasons: [Season.FALL, Season.WINTER],
    Time: "6am - 7pm",
  },
  {
    Name: "Bullhead",
    Image: Bullhead,
    Locations: [Location.MOUNTAIN_LAKE],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Tilapia",
    Image: Tilapia,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER, Season.FALL],
    Time: "	6am - 2pm",
  },
  {
    Name: "Chub",
    Image: Chub,
    Locations: [Location.MOUNTAIN_LAKE, Location.FOREST_RIVER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Dorado",
    Image: Dorado,
    Locations: [Location.FOREST_RIVER],
    Weathers: AllWeather,
    Seasons: [Season.SUMMER],
    Time: "6am - 7pm",
  },
  {
    Name: "Albacore",
    Image: Albacore,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.FALL, Season.WINTER],
    Time: "	6am - 11am, 6pm - 2am",
  },
  {
    Name: "Shad",
    Image: Shad,
    Locations: [Location.RIVER],
    Weathers: [Weather.RAINY],
    Seasons: [Season.SPRING, Season.SUMMER],
    Time: "9am - 2am",
  },
  {
    Name: "Lingcod",
    Image: Lingcod,
    Locations: [Location.RIVER, Location.MOUNTAIN_LAKE],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "Any",
  },
  {
    Name: "Halibut",
    Image: Halibut,
    Locations: [Location.OCEAN],
    Weathers: AllWeather,
    Seasons: [Season.SPRING, Season.SUMMER, Season.WINTER],
    Time: "6am - 11am, 7pm - 2am",
  },
  {
    Name: "Lobster",
    Image: Lobster,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Crayfish",
    Image: Crayfish,
    Locations: [Location.CRAB_POT_FRESHWATER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Crab",
    Image: Crab,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Cockle",
    Image: Cockle,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Mussel",
    Image: Mussel,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Shrimp",
    Image: Shrimp,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Snail",
    Image: Snail,
    Locations: [Location.CRAB_POT_FRESHWATER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Periwinkle",
    Image: Periwinkle,
    Locations: [Location.CRAB_POT_FRESHWATER],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Oyster",
    Image: Oyster,
    Locations: [Location.CRAB_POT_OCEAN],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Woodskip",
    Image: Woodskip,
    Locations: [Location.SECRET_WOODS, Location.FOREST_FARM_POND],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Glacierfish",
    Image: Glacierfish,
    Locations: [Location.GLACIERFISH],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "Any",
  },
  {
    Name: "Void Salmon",
    Image: VoidSalmon,
    Locations: [Location.WITCH_SWAMP],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Slimejack",
    Image: Slimejack,
    Locations: [Location.MUTANT_BUG_LAIR],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Midnight Squid",
    Image: MidnightSquid,
    Locations: [Location.NIGHT_MARKET],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "5pm - 2am",
  },
  {
    Name: "Spook Fish",
    Image: SpookFish,
    Locations: [Location.NIGHT_MARKET],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "5pm - 2am",
  },
  {
    Name: "Blobfish",
    Image: Blobfish,
    Locations: [Location.NIGHT_MARKET],
    Weathers: AllWeather,
    Seasons: [Season.WINTER],
    Time: "5pm - 2am",
  },
  {
    Name: "Stingray",
    Image: Stingray,
    Locations: [Location.PIRATE_COVE],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Lionfish",
    Image: Lionfish,
    Locations: [Location.GINGER_ISLAND],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
  {
    Name: "Blue Discus",
    Image: BlueDiscus,
    Locations: [Location.GINGER_ISLAND],
    Weathers: AllWeather,
    Seasons: AllSeasons,
    Time: "Any",
  },
];

/*
{
  Name: "",
  Image: "",
  Locations: [],
  Weathers: [],
  Seasons: [],
  Time: "",
},

 */
