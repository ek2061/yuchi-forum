import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { createCustomTheme } from "theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
