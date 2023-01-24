import Layout from "@components/Layouts/Layout";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "@src/context/appContext";
import useInitialState from "@src/hooks/useInitialState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={useInitialState()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
