import * as React from "react";

import { Global } from "@emotion/react";
import { injectGlobalStyles } from "~/common/styles/global";

import App from "next/app";

// NOTE(wwwjim):
// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Global styles={injectGlobalStyles()} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
