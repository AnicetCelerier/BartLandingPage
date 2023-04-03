import React from "react";

import Head from "./Head";

type PageProps = {
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Head />
      <main>{children}</main>
    </>
  );
};

export default Page;
