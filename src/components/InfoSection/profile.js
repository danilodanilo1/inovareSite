import React, { useEffect, useState } from "react";
import sacada1 from "../images/servicos/sacadas/sacada-3.jpeg";
import sacada2 from "../images/servicos/sacadas/sacada-4.jpeg";
import sacada3 from "../images/servicos/sacadas/sacada-5.jpeg";
import sacada4 from "../images/servicos/sacadas/sacada-6.jpeg";
import pet1 from "../images/servicos/pets/pet-1.jpg";
import pet6 from "../images/servicos/pets/pet-6.jpg";
import pet5 from "../images/servicos/pets/pet-7.jpg";
import pet2 from "../images/servicos/pets/pet-2.jpeg";
import pet3 from "../images/servicos/pets/pet-3.jpeg";
import janela1 from "../images/servicos/janelas/janela-1.jpeg";
import janela2 from "../images/servicos/janelas/janela-2.jpeg";
import janela3 from "../images/servicos/janelas/janela-3.jpeg";
import janela4 from "../images/servicos/janelas/janela-4.jpeg";
import janela5 from "../images/servicos/janelas/janela-5.jpeg";
import janela6 from "../images/servicos/janelas/janela-6.jpeg";
import arrowDown from "../images/arrowUp.svg";
import arrowBlack from "../images/arrowblack.svg";
import { InfoRow, InfoWrapper, InfoContainer, InfoRow2 } from "./infoElements";

import { Link } from "react-scroll";

import ImageSlider from "../slider/ImageSlider";
import Image from "next/image";
import { HeroBtnWrapper } from "../HeroSection/heroElements";

export default function InfoSection({ id, lightBg, imgStart }) {
  const [width, setWidth] = useState(769);
  function initialState() {
    const num = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
    return setWidth(num);
  }

  useEffect(() => {
    initialState();
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
          marginBottom: "10px",
        }}
      >
        <h1 style={{ color: "#d4aa00ff" }}>{titulo}</h1>
        <h2 style={{ fontSize: "18px" }}>{frase}</h2>
      </div>
      <div>
        <ImageSlider slides={slider} />
      </div>
    </div>
  );

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow2 imgStart={imgStart}>
            <div style={{ display: "flex" }}>
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
                spy={true}
                exact="true"
                offset={width <= 768 ? 0 : -70}
              >
                <Image
                  className="arrow"
                  src={arrowDown}
                  width={30}
                  height={30}
                  alt="scroll-down"
                />
              </Link>
            </HeroBtnWrapper>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
