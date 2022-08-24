import fetch from "node-fetch";
import fs from "fs";
import { ContentPaste } from "@mui/icons-material";
const host = "stardewvalleywiki.com";
const APIPath = "/mediawiki/api.php";
const APIURL = `https://${host}${APIPath}`;

const getPage = async (item: string): Promise<string> => {
  const result = await fetch(
    `${APIURL}?action=query&prop=revisions&titles=${item}&rvslots=*&rvprop=content&formatversion=2&format=json`
  );
  const json = (await result.json()) as any;
  const content = json.query.pages[0].revisions[0].slots.main.content;
  return Promise.resolve(content);
};

const getItemImage = async (item: string): Promise<ArrayBuffer> => {
  const pageResult = await fetch(
    `${APIURL}?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:${item}.png`
  );
  const json = (await pageResult.json()) as any;
  const url = (Object.values(json.query.pages)[0] as any).imageinfo[0].url;
  const imageResult = await fetch(url);
  const blob = await imageResult.arrayBuffer();
  return Promise.resolve(blob);
};

const scrapeImage = async (item: string): Promise<void> => {
  const path = `scraper/img/${item}.png`;
  if (fs.existsSync(path)) return;
  const seafoamPudding = await getItemImage(item);
  fs.writeFileSync(path, Buffer.from(new Uint8Array(seafoamPudding)));
};

const main = async (): Promise<void> => {
  // const parsnip = await getItemPage("Seafoam_Pudding");
  // console.log(parsnip);
  // scrapeImage("Omelet");
  const cooking = await getPage("Cooking");
  // console.log(cooking);
  const recipeRegex = /^{{:([^|]*)|RecipeRow}}$/;
  const recipes = cooking
    .split("\n")
    .map((r) => r.match(recipeRegex)?.at(1))
    .filter((r): r is string => !!r);
  let parsedRecipes: Recipe[] = [];
  for (const recipe of recipes) {
    const recipePage = await getPage(recipe);
    parsedRecipes.push(parseRecipe(recipePage));
  }
  console.log(JSON.stringify(parsedRecipes, null, 2));
  // const recipe = recipes.find((r) => r === "Omelet");
  // const recipePage = await getPage(recipe!);
  // console.log(parseRecipe(recipePage));
};

main();

// api.php?action=query&prop=revisions&titles=Pet_door&rvslots=*&rvprop=content&formatversion=2

// https://stardewvalleywiki.com/mediawiki/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:Clam.png

interface Ingredient {
  name: string;
  amount: number;
}

interface Recipe {
  name: string;
  source: string;
  ingredients: Ingredient[];
}

const parseRecipe = (pageContent: string): Recipe => {
  // console.log(pageContent);
  const lines = pageContent.split("\n");
  // Parse source
  const recipeContent = lines.find((l) => l.startsWith("|recipe")) ?? "";
  let source = recipeContent;
  const channelRegexp = /{{CookingChannel\|([^}]+)}}/;
  const channelMatch = recipeContent?.match(channelRegexp);
  if (channelMatch) {
    source = channelMatch[1];
  }
  const npcRegexp = /{{NPC\|([^|]+)\|Mail - (\d)/;
  const npcMatch = recipeContent?.match(npcRegexp);
  if (npcMatch) {
    source = `${npcMatch[1]} - ${npcMatch[2]} heart`;
  }
  const npcEventRegexp = /{{NPC\|([^|]+)\|(\d)-heart event/;
  const npcEventMatch = recipeContent?.match(npcEventRegexp);
  if (npcEventMatch) {
    source = `${npcEventMatch[1]} - ${npcEventMatch[2]} event`;
  }
  const skillRegexp = /([a-zA-Z]+) Skill Icon/;
  const skillMatch = recipeContent.match(skillRegexp);
  if (skillMatch) {
    const levelMatch = recipeContent.match(/Level \d/);
    source = `${skillMatch[1]} ${levelMatch?.at(1)}`;
  }
  if (recipeContent.includes("Island Trader")) {
    source = "Island Trader";
  }
  if (recipeContent.includes("Resort")) {
    source = "Resort";
  }
  if (recipeContent.includes("Island Trader")) {
    source = "Island Trader";
  }
  if (recipeContent.includes("Volcano")) {
    source = "Volcano";
  }
  if (recipeContent.includes("Saloon")) {
    source = "Saloon";
  }
  if (recipeContent.includes("farmhouse")) {
    source = "Upgrade farmhouse";
  }

  // Parse Ingredients
  const ingredientsContent =
    lines.find((l) => l.startsWith("|ingredients")) ?? "";
  const ingredientRegexp = /{{name\|([^|]+)\|(\d+)}}/g;
  const matches = ingredientsContent.matchAll(ingredientRegexp);
  const ingredients: Ingredient[] = [];
  if (ingredientsContent.includes("Fish.png")) {
    const match = ingredientsContent.match(/Any \[\[Fish\]\] \((\d+)\)/);
    if (match) ingredients.push({ name: "Fish", amount: Number(match[1]) });
  }
  if (matches) {
    for (const match of [...matches]) {
      ingredients.push({ name: match[1], amount: Number(match[2]) });
    }
  }
  return {
    name:
      lines
        .find((l) => l.startsWith("|name"))
        ?.split("=")
        ?.at(1)
        ?.trim() ?? "UNKNOWN",
    source: source,
    ingredients: ingredients,
  };
};
