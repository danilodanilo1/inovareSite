import React, { useState, useEffect } from "react";
import Footer from "../src/components/footer";
import HeroSection from "../src/components/HeroSection";
import InfoNobutton from "../src/components/InfoSection/infoNoButton.js";
import Contact from "../src/components/InfoSection/contact.js";
import Profile from "../src/components/InfoSection/profile.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../src/components/InfoSection/Data";
import NavBar from "../src/components/NavBar";
import Sidebar from "../src/components/SideBar";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Head from "next/head";
import { FloatWhats, Linkao } from "../src/components/NavBar/NavBarElements";
import logoWhats from "../src/components/images/img/logowhats.svg";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
    document.documentElement.lang = "pt-BR";
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    transition: transitions.SCALE,
  };

  return (
    <>
      <div>
        <Head>
          <title>Inovare Redes</title>
          <meta
            name="description"
            content="Inovare Redes de proteção para sacadas, janelas, piscinas, escadas e onde mais você quiser!"
          />
          <meta
            property="og:title"
            content="Redes de proteção e telas para proteção para sacadas, janelas, piscinas, escadas"
          />
          <meta
            property="og:description"
            content="Redes de proteção e telas para proteção para sacadas, janelas, piscinas, escadas"
          />
          <meta
            property="og:url"
            content="https://www.inovareredesdeprotecao.com.br/"
          />
          <meta property="og:type" content="website"></meta>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="google-site-verification"
            content="kMJ2VUUTMm2TdYmxpFy_DdCcanD4zkR_S4WW65TRj-U"
          />
          <meta property="og:site_name" content="Inovare redes de Proteção" />
          <meta
            property="og:image"
            itemProp="image"
            content="triangulosemnome.svg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:updated_time" content="1440432930" />
        </Head>
      </div>
      <AlertProvider template={AlertTemplate} {...options}>
        <FloatWhats>
          <Linkao
            href="https://wa.me/5511952688682"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            style={{
              width: tamanhoTela >= 768 ? "250px" : "",
              whiteSpace: "nowrap",
              textDecoration: "none",
              fontWeight: "bold",
              padding: tamanhoTela >= 768 ? "0 20px" : "",
              color: "#000",
              gap: "5px",
            }}
          >
            {" "}
            {tamanhoTela >= 768 ? "(11)9 5268-8682" : ""}
            <Image
              src={logoWhats}
              loading="lazy"
              width={tamanhoTela >= 768 ? 60 : ""}
              height={tamanhoTela >= 768 ? 60 : ""}
              alt="logo inovare redes"
            />
          </Linkao>
        </FloatWhats>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <InfoNobutton {...homeObjOne} nextPage={"servicos"} />
        <InfoNobutton {...homeObjTwo} nextPage={"produtos"} />
        <Profile {...homeObjThree} />
        <Contact {...homeObjFour} />
        <Footer />
      </AlertProvider>
    </>
  );
}
