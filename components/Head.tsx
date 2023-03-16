import HeadNext from "next/head";
import { useEffect } from "react";
// import { useHeader, useScroll } from "../scripts";
import Script from "next/script";

const Head = () => {
  // const initHeader = useHeader();
  // const initScroll = useScroll();

  // useEffect(() => {
  //   initHeader();
  //   initScroll();
  // }, [initHeader, initScroll]);

  return (
    <HeadNext>
      <title>Bart</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />

      <meta property="og:title" content="Bart" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="" />
      <meta name="robots" content="all" />
      <meta name="copyright" content="Copyright © " />
      <meta property="og:image" content="" />

      <link rel="icon" href="" />
      <link rel="icon" href="" type="image/svg+xml" />
      <link rel="shortcut icon" href="" />
      <link rel="shortcut icon" href="" type="image/svg+xml" />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#34495e" />

      <Script src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/jquery-3.6.0.min.js?alt=media&token=4300d217-bc88-46f5-a036-0ce7328fab83"></Script>
    </HeadNext>
  );
};

export default Head;
