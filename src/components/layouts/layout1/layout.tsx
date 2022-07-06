import React, { useEffect } from "react";
import Head from "next/head";
import { Context, ReactNode, useState } from "react";
import l from "./layout.module.scss";
import Footer from "@components/modules/Footer/footer";
import Header from "@components/modules/Header/header";
import Links from "@components/modules/Links/links";
import Bottomnav from "@components/modules/Bottomnav/bottomnav";
import Usculpture from "../../../../assets/Illustrations/usculpture.svg";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/ungarmichael-logo.ico" />
        <meta
          name="description"
          content="Developer and Designer from Austria focusing on flawless code and magnificient design."
        />
      </Head>
      <Header />
      <main className={l.main}>
        {children}
        <Usculpture
          className={l["u_sculpture"]}
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
      </main>
      <Bottomnav />
      <Footer />
      <Links />
    </>
  );
}