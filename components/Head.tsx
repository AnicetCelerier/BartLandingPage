import HeadNext from "next/head";

const Head = () => {
  return (
    <HeadNext>
      <title>Cantine Digitale pour Entreprise | Bart</title>
      <meta
        name="description"
        content="Bart, la cantine 2.0 en quelques clics ! Notre cantine d'entreprise 2.0 attractive vous permet de commander facilement des plats signatures des meilleurs restaurants pour tous vos collaborateurs."
      />
      <meta name="keywords" content="" />
      <meta name="author" content="" />

      <meta
        property="og:title"
        content="Cantine Digitale pour Entreprise | Bart"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta
        property="og:description"
        content="Bart, la cantine 2.0 en quelques clics ! Notre cantine d'entreprise 2.0 attractive vous permet de commander facilement des plats signatures des meilleurs restaurants pour tous vos collaborateurs."
      />
      <meta name="robots" content="all" />
      <meta
        name="copyright"
        content="Copyright © 2023 Bartapp. Tous droits réservés."
      />
      <meta property="og:image" content="" />

      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>

      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#FFFFFF" />
    </HeadNext>
  );
};

export default Head;
