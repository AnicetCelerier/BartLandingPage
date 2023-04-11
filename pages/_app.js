import "../index.scss";
import localFont from "@next/font/local";
import { MantineProvider, Global } from "@mantine/core";

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Black.ttf",
      style: "normal",
      weight: "900",
      variable: "--font-black-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.ttf",
      style: "normal",
      weight: "500",
      variable: "--font-medium-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.ttf",
      style: "normal",
      weight: "700",
      variable: "--font-bold-satoshi",
    },
    {
      path: "../assets/fonts/Satoshi-Regular.ttf",
      style: "normal",
      weight: "400",
      variable: "--font-regular-satoshi",
    },
  ],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Satoshi, sans-serif",
        colors: {
          customBlue: ["#170F49", "#6F6C90"],
        },
      }}
    >
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
