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
import { NextSeo } from "next-seo";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
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
    <html lang="pt-BR">
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
          <meta property="og:url" content="https://previa-inovare.netlify.app/" />
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
          {/* <link rel="shortcut icon" href="public/favicon.ico" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          ></link>
        </Head>
      </div>
      <AlertProvider template={AlertTemplate} {...options}>
        <FloatWhats>
          <Linkao
            href="https://wa.me/5511952688682"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            style={{
              width: "200px",
              height: "60px",
              whiteSpace: "nowrap",
              padding: "0 20px",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {" "}
            {tamanhoTela >= 768 ? "11-952688682" : ""}
            <i
              className="fa fa-whatsapp whatsapp-icon"
              style={{
                width: tamanhoTela >= 768 ? "60px" : "20px",
                height: tamanhoTela >= 768 ? "60px" : "20px",
                bottom: tamanhoTela >= 768 ? "0" : "30px",
              }}
            ></i>
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
    </html>
  );
}
