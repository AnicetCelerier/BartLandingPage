import HeadNext from "next/head";

const Head = () => {
  return (
    <HeadNext>
      <title>Bart</title>
      <meta name="description" content="Bart, la cantine 2.0 en quelques clics ! Notre cantine d'entreprise 2.0 attractive vous permet de commander facilement des plats signatures des meilleurs restaurants pour tous vos collaborateurs." />
      <meta name="keywords" content="" />
      <meta name="author" content="" />

      <meta property="og:title" content="Bart" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="Bart, la cantine 2.0 en quelques clics ! Notre cantine d'entreprise 2.0 attractive vous permet de commander facilement des plats signatures des meilleurs restaurants pour tous vos collaborateurs." />
      <meta name="robots" content="all" />
      <meta
        name="copyright"
        content="Copyright © 2023 Bartapp. Tous droits réservés."
      />
      <meta property="og:image" content="" />

      <link rel="icon" href="" />
      <link rel="icon" href="" type="image/svg+xml" />
      <link rel="shortcut icon" href="" />
      <link rel="shortcut icon" href="" type="image/svg+xml" />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#FFFFFF" />
    </HeadNext>
  );
};

export default Head;
