import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
      <Navbar />
      <Category />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
