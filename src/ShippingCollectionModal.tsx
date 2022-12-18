import React from "react";
import { CollectionModal } from "./CollectionModal";
import { ShippingItems } from "./data/Shipping";
import { Collections } from "./Collections";
import { splitChunk } from "./utils";
import { Divider } from "@mui/material";
import { ShippingItem } from "./ShippingItem";
import { ShippingCollectionButton } from "./ShippingCollectionButton";

interface IProps {
  open: boolean;
  onClose: () => void;
  collections: Collections;
  setCollection: (o: (old: Collections) => Collections) => void;
}

export const ShippingCollectionModal = ({
  open,
  onClose,
  collections,
  setCollection,
}: IProps): React.ReactElement => {
  const lines: ShippingItem[][] = splitChunk(ShippingItems, 10);
  const pages: ShippingItem[][][] = splitChunk(lines, 7);

  const onShippingClick = (shippingItemName: string) => {
    setCollection((old: Collections): Collections => {
      return {
        ...old,
        shipping: {
          ...old.shipping,
          [shippingItemName]: !old.shipping[shippingItemName],
        },
      };
    });
  };
  return (
    <CollectionModal open={open} onClose={onClose}>
      {pages.map((page, i) => (
        <React.Fragment key={i}>
          {i !== 0 && (
            <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
          )}
          {page.map((line, i) => (
            <div key={i} style={{ display: "flex" }}>
              {line.map((f) => (
                <ShippingCollectionButton
                  key={f.Name}
                  item={f}
                  acquired={!!collections.shipping[f.Name]}
                  onClick={() => onShippingClick(f.Name)}
                />
              ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </CollectionModal>
  );
};
