import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Head from "next/head";
import CookieManager from "../components/CookieManager";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-P6FBLTV",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logos/faviconLogo.png" />
        {/* <script src="../components/CookieManager.js"></script>npm i tarteaucitronjs */}
      </Head>
      <Provider store={store}>
        <CookieManager />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
