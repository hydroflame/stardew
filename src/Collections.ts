import { Recipes } from "./data/Recipes";
import { Fishes } from "./Fish";
import { CookingState } from "./RecipeState";

export type FishCollection = Record<string, boolean>;
export type CookingCollection = Record<string, CookingState>;
export type ShippingCollection = Record<string, boolean>;
export type ArtefactsCollection = Record<string, boolean>;

export interface Collections {
  fishes: FishCollection;
  cooking: CookingCollection;
  shipping: ShippingCollection;
  artefacts: ArtefactsCollection;
}

const initialFishCollection = (): FishCollection => {
  const collection: FishCollection = {};
  for (const fish of Fishes) {
    collection[fish.Name] = false;
  }
  return collection;
};

const initialCookingCollection = (): CookingCollection => {
  const collection: CookingCollection = {};
  for (const recipe of Recipes) {
    collection[recipe.Name] = CookingState.LOCKED;
  }
  return collection;
};

export const defaultCollections = (): Collections => ({
  fishes: initialFishCollection(),
  cooking: initialCookingCollection(),
  shipping: {},
  artefacts: {},
});
