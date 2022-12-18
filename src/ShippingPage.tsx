import { Typography } from "@mui/material";
import React from "react";
import { Collections } from "./Collections";
import { ShippingItems } from "./data/Shipping";

import { Season } from "./enums";
import { ShippingCard } from "./ShippingCard";
import { ShippingItem } from "./ShippingItem";

interface IProps {
  season: Season;
  collections: Collections;
  setCollections: (o: (old: Collections) => Collections) => void;
}
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

export const ShippingPage = ({
  collections,
  setCollections,
  season,
}: IProps): React.ReactElement => {
  const onShipped = (item: ShippingItem) => {
    setCollections((old: Collections): Collections => {
      return {
        ...old,
        shipping: { ...old.shipping, [item.Name]: !old.shipping[item.Name] },
      };
    });
  };
  const items = Object.values(ShippingItems).filter(
    (i) => !collections.shipping[i.Name]
  );
  const [available] = splitArray(
    items,
    (i) => i.Seasons.length === 0 || i.Seasons.includes(season)
  );
  const [seasonal, others] = splitArray(available, (i) =>
    i.Seasons.includes(season)
  );
  return (
    <>
      <Typography variant="h3">{season}</Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {seasonal.map((item) => (
          <ShippingCard
            key={item.Name}
            item={item}
            onShipped={() => onShipped(item)}
          />
        ))}
      </div>

      <Typography variant="h3">others</Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {others.map((item) => (
          <ShippingCard
            key={item.Name}
            item={item}
            onShipped={() => onShipped(item)}
          />
        ))}
      </div>
    </>
  );
};
