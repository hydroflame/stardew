import { Collections, defaultCollections } from "./Collections";

const key = "collections";

export const Save = (c: Collections): void => {
  localStorage.setItem(key, JSON.stringify(c));
};

export const Load = (): Collections => {
  const collections = localStorage.getItem("collections");
  if (collections) return JSON.parse(collections);
  return defaultCollections();
};
