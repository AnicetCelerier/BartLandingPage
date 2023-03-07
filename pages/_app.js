import "../index.scss";
import localFont from "@next/font/local";

// const myFont = localFont({ src: "../assets/fonts/Satoshi-Regular.ttf" });

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Black.ttf",
      style: "normal",
      weight: "900",
      variable:"--font-black-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.ttf",
      style: "normal",
      weight: "500",
      variable:"--font-medium-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.ttf",
      style: "normal",
      weight: "700",
      variable:"--font-bold-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Regular.ttf",
      style: "normal",
      weight: "400",
      variable:"--font-regular-satoshi",
    },
  ],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

// https://nextjs.org/docs/basic-features/font-optimization#local-fonts
