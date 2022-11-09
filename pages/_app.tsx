import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { createCustomTheme } from "theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createCustomTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
