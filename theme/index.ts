import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { light } from "./light";

export const createCustomTheme = () => {
  const theme = createTheme(light);
  return responsiveFontSizes(theme);
};
