import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as gtag from "../src/components/Analitics/lib/gtag";
import Analytics from "../src/components/Analitics";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
`;

const theme = {
  colors: {
    primary: "#000",
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Analytics />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
