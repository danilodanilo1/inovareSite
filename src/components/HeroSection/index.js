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
      <Image layout="fill" alt="rede" src={Video} />
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
              width={tamanhoTela > 768 ? 350 : 200}
              height={tamanhoTela > 768 ? 350 : 250}
            />
          </div>
          <div
            id="slider"
            style={{
              zIndex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              maxWidth: tamanhoTela > 768 ? "750px" : "80%",
              maxHeight: tamanhoTela > 768 ? "" : "300px",
              height: tamanhoTela > 768 ? "" : "250px",
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              opacity: "0.9",
              zIndex: "0",
            }}
          >
            <Heading>
              {" "}
              A{" "}
              <span
                style={{
                  color: "#725c04",
                }}
              >
                INOVARE REDES
              </span>{" "}
              é especialista em vendas e instalaçãos de redes de proteção para
              janelas, escadas, sacadas, quadras e outras áreas.
            </Heading>
            {/* <h1
              style={{
                fontFamily: "Roboto",
                lineHeight: "1.1",
                fontWeight: "600",
                fontSize: tamanhoTela > 768 ? "34px" : "20px",
              }}
            ></h1> */}
            {/* <ImageSlider slides={SliderData} /> */}
          </div>
        </div>
        <S.HeroBtnWrapper>
          <Link
            to="sobre"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={tamanhoTela <= 768 ? 0 : -70}
          >
            <Image
              className="arrow"
              src={arrowDown}
              width={30}
              height={30}
              alt="scroll-down"
            />
          </Link>
        </S.HeroBtnWrapper>
      </div>
    </S.Wrapper>
  );
}
