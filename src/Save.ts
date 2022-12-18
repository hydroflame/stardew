import { Collections, defaultCollections } from "./Collections";

const key = "collections";

export const Save = (c: Collections): void => {
  localStorage.setItem(key, JSON.stringify(c));
};

export const Load = (): Collections => {
  const collections = localStorage.getItem("collections");
  if (collections) {
    const c = JSON.parse(collections) as Collections;
    if (!c.fishes) c.fishes = {};
    if (!c.shipping) c.shipping = {};
    if (!c.artefacts) c.artefacts = {};

    return c;
  }
  return defaultCollections();
};
