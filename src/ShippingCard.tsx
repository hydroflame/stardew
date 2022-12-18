import React from "react";
import { Fish } from "./Fish";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { StardewBox } from "./Box";
import { ShippingItem } from "./ShippingItem";

interface IProps {
  item: ShippingItem;
  onShipped: () => void;
}

export const ShippingCard = ({
  item,
  onShipped,
}: IProps): React.ReactElement => {
  return (
    <Card component={StardewBox} sx={{ minWidth: 275, margin: "1em" }}>
      <CardHeader
        title={<Typography>{item.Name}</Typography>}
        action={<img src={item.Image} alt={item.Name} />}
      ></CardHeader>
      <CardContent>
        {item.Seasons.length > 0 && (
          <Typography>
            Seasons: {item.Seasons.map((s) => String(s)).join(" • ")}
          </Typography>
        )}
        <Typography>
          Sources: {item.Sources.map((s) => String(s)).join(" • ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onShipped}>
          Shipped
        </Button>
      </CardActions>
    </Card>
  );
};
