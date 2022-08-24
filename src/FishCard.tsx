import React from "react";
import { Fish } from "./Fish";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { StardewBox } from "./Box";

interface IProps {
  fish: Fish;
  onCaught: () => void;
}

export const FishCard = ({ fish, onCaught }: IProps): React.ReactElement => {
  return (
    <Card component={StardewBox} sx={{ minWidth: 275, margin: "1em" }}>
      <CardHeader
        title={<Typography>{fish.Name}</Typography>}
        action={<img src={fish.Image} alt={fish.Name} />}
      ></CardHeader>
      <CardContent>
        <Typography>
          Locations: {fish.Locations.map((s) => String(s)).join(" - ")}
        </Typography>
        <Typography>
          Weathers: {fish.Weathers.map((s) => String(s)).join(" - ")}
        </Typography>
        <Typography>
          Seasons: {fish.Seasons.map((s) => String(s)).join(" - ")}
        </Typography>
        <Typography>Time: {fish.Time}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onCaught}>
          Caught
        </Button>
      </CardActions>
    </Card>
  );
};
