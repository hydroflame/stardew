import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Collections } from "./Collections";
import { Recipes } from "./data/Recipes";
import { Season } from "./enums";
import { Recipe } from "./Recipe";
import { CookingState } from "./RecipeState";

interface IProps {
  season: Season;
  collections: Collections;
  setCollections: (o: (old: Collections) => Collections) => void;
}

export const CookingPage = ({
  collections,
  setCollections,
  season,
}: IProps): React.ReactElement => {
  const lockedRecipes = Object.entries(collections.cooking)
    .filter(([name, state]) => state === CookingState.LOCKED)
    .map((r): [string, Recipe] => [
      r[0],
      Recipes.find((re) => re.Name === r[0])!,
    ]);

  const uncookedRecipes = Object.entries(collections.cooking)
    .filter(([name, state]) => state !== CookingState.COOKED)
    .map((r) => Recipes.find((re) => re.Name === r[0])!);

  const addIngredients = (r: Recipe) => {
    for (const ing of r.Ingredients) {
      const subRec = Recipes.find((r) => r.Name === ing.Name);
      if (subRec) {
        addIngredients(subRec);
        continue;
      }
      ingredients[ing.Name] = (ingredients[ing.Name] ?? 0) + ing.Amount;
    }
  };
  const ingredients: Record<string, number> = {};
  for (const r of uncookedRecipes) {
    addIngredients(r);
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", width: "50%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="primary">Recipe name</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="primary">Source</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lockedRecipes.map((r) => (
                <TableRow key={r[0]}>
                  <TableCell component="th" scope="row">
                    <Typography color="primary">{r[0]}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color="primary">{r[1].Source}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box sx={{ display: "flex", width: "50%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="primary">Missing ingredient</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="primary">Amount</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(ingredients).map(([name, amt]) => (
                <TableRow key={name}>
                  <TableCell component="th" scope="row">
                    <Typography color="primary">{name}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color="primary">{amt}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  );
};
