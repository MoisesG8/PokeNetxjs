import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode;
  titulo?: string;
};

export const Layout: FC<LayoutProps> = ({ children, titulo }) => {
  return (
    <>
      <Head>
        <title>{titulo || "Pokemon App"}</title>
        <meta name="author" content="Moises Gonzalez" />
        <meta name="description" content="Pokemon App" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
