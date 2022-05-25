import React, { useEffect, useState } from "react";
import sacada1 from "../images/servicos/sacadas/sacada-3.webp";
import sacada2 from "../images/servicos/sacadas/sacada-4.webp";
import sacada3 from "../images/servicos/sacadas/sacada-5.webp";
import sacada4 from "../images/servicos/sacadas/sacada-6.webp";
import pet1 from "../images/servicos/pets/pet-1.webp";
import pet6 from "../images/servicos/pets/pet-6.webp";
import pet5 from "../images/servicos/pets/pet-7.webp";
import pet2 from "../images/servicos/pets/pet-2.webp";
import pet3 from "../images/servicos/pets/pet-3.webp";
import janela1 from "../images/servicos/janelas/janela-1.webp";
import janela2 from "../images/servicos/janelas/janela-2.webp";
import janela3 from "../images/servicos/janelas/janela-3.webp";
import janela4 from "../images/servicos/janelas/janela-4.webp";
import janela5 from "../images/servicos/janelas/janela-5.webp";
import janela6 from "../images/servicos/janelas/janela-6.webp";
import arrowDown from "../images/arrowUp.svg";
import { InfoWrapper,InfoRow2, InfoContainer2 } from "./infoElements";

import { Link } from "react-scroll";

import ImageSlider from "../slider/ImageSlider";
import Image from "next/image";
import { HeroBtnWrapper } from "../HeroSection/heroElements";

export default function InfoSection({ id, lightBg, imgStart }) {
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
  }, []);
  const sacadas = [
    {
      image: sacada1,
    },
    {
      image: sacada2,
    },
    {
      image: sacada3,
    },
    {
      image: sacada4,
    },
  ];

  const pets = [
    {
      image: pet1,
    },
    {
      image: pet2,
    },
    {
      image: pet5,
    },
    {
      image: pet6,
    },
    {
      image: pet3,
    },
  ];

  const janelas = [
    {
      image: janela1,
    },
    {
      image: janela2,
    },
    {
      image: janela3,
    },
    {
      image: janela4,
    },
    {
      image: janela5,
    },
    {
      image: janela6,
    },
  ];

  const Card = ({ titulo, frase, slider }) => (
    <div style={{ margin: "0 10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "0",
          marginBottom: tamanhoTela >= 768 ? "10px" : "0",
        }}
      >
        <h1 style={{ color: "#d4aa00ff", fontSize: tamanhoTela >= 768 ? "18px" : "16px" }}>{titulo}</h1>
        <h2 style={{ fontSize: tamanhoTela >= 768 ? "18px" : "14px"}}>{frase}</h2>
      </div>
      <div>
        <ImageSlider slides={slider} tamanhoTela={tamanhoTela} />
      </div>
    </div>
  );

  return (
    <>
      <InfoContainer2 lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow2 imgStart={imgStart}>
            <div style={{ display: tamanhoTela >= 768 ? "flex" : "block" }}>
              <Card
                titulo={"Proteção para Sacadas."}
                frase={"Proteção UV contra ressecamento."}
                slider={sacadas}
              />
              <Card
                titulo={"Proteção para PETS."}
                frase={"Proteja seu companheiro de quedas."}
                slider={pets}
              />
              <Card
                titulo={"Proteção para Janelas."}
                frase={"Garantia total contra rupturas."}
                slider={janelas}
              />
            </div>
            <HeroBtnWrapper>
              <Link
                to="cadastrar"
                smooth={true}
                duration={700}
                href="/cadastrar"
                spy={true}
                exact="true"
                offset={tamanhoTela <= 768 ? 0 : -70}
              >
                <Image
                  // className="arrow"
                  src={arrowDown}
                  width={30}
                  height={30}
                  loading="lazy"
                  alt="scroll-down"
                />
              </Link>
            </HeroBtnWrapper>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer2>
    </>
  );
}
