import BBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StardewBox = styled(BBox)(({ theme }) => ({
  "&": {
    backgroundColor: "rgb(243, 172, 98)",
    borderColor: "rgb(170,70,4)",
    borderStyle: "solid",
    borderWidth: "5px",
    borderRadius: "10px",
    padding: "15px",
  },
}));
