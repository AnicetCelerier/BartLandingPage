import "../index.scss";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../assets/fonts/Satoshi-Regular.ttf" });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

// https://nextjs.org/docs/basic-features/font-optimization#local-fonts
