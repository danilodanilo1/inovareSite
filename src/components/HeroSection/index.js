import React, { useEffect, useState } from "react";
import Video from "../images/unsp/diagonal.jpg";
import * as S from "./heroElements";
import eu from "../images/img/logoPintado.svg";
import arrowDown from "../images/arrowUp.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { Linkao } from "../NavBar/NavBarElements";
import { Heading, TopLine } from "../InfoSection/infoElements";

export default function HeroSection() {
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
  }, []);

  return (
    <S.Wrapper>
      <Image layout="fill" alt="rede" loading="lazy" src={Video} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            // justifyContent: "space-around",
            marginTop: tamanhoTela > 768 ? "" : "-30%",
          }}
        >
          <div>
            <Image
              className="HeroImage"
              src={eu}
              loading="lazy"
              width={tamanhoTela > 768 ? 350 : 200}
              height={tamanhoTela > 768 ? 350 : 250}
              alt="logo inovare redes"
            />
          </div>
          <div
            id="slider"
            style={{
              zIndex: "1",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "column",
              maxWidth: tamanhoTela > 768 ? "50%" : "80%",
              maxHeight: tamanhoTela > 768 ? "" : "300px",
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              opacity: "0.9",
              zIndex: "0",
            }}
          >
          <h2>
          <span
                style={{
                  color: "#725c04",
                }}
              >
                A INOVARE REDES DE PROTE????O
              </span>{" "}
          </h2>
            <h1
              style={{
                color: "#010606",
                fontSize: tamanhoTela >= 768 ? "48px" : "26.5px",
                margin: "0px",
                lineHeight: "1.1",
                fontWeight: "600",
              }}
            >
              {" "}
              
             
              ?? especialista em venda e instala????o de redes de prote????o para
              janelas, escadas, sacadas, quadras e outras ??reas.
            </h1>
          </div>
        </div>
        <S.HeroBtnWrapper>
          <Link
            to="sobre"
            smooth={true}
            duration={700}
            spy={true}
            href="/sobre"
            exact="true"
            offset={tamanhoTela <= 768 ? 0 : -70}
          >
            <Image
              className="arrow"
              src={arrowDown}
              width={30}
              loading="lazy"
              height={30}
              alt="scroll-down"
            />
          </Link>
        </S.HeroBtnWrapper>
      </div>
    </S.Wrapper>
  );
}
