import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { wrapper } from "store";
import { createCustomTheme } from "theme";
import { GlobalMessage } from "views/GlobalMessage";
import "../styles/globals.css";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const theme = createCustomTheme();

  return (
    <SessionProvider>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          preventDuplicate
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          autoHideDuration={2000}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Component {...pageProps} />
            <GlobalMessage />
          </ThemeProvider>
        </SnackbarProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
