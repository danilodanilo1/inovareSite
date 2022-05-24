import React, { useEffect, useState } from "react";
import Video from "../images/unsp/diagonal.jpg";
import * as S from "./heroElements";
import eu from "../images/img/logoPintado.svg";
import arrowDown from "../images/arrowUp.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { Linkao } from "../NavBar/NavBarElements";

export default function HeroSection() {
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

  return (
    <S.Wrapper>
      <Image layout="fill" alt="rede" src={Video} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Image className="HeroImage" src={eu} width={350} height={350} />
          </div>
          <div
            id="slider"
            style={{
              zIndex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              maxWidth: "700px",
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              opacity: "0.9",
              zIndex: "0",
            }}
          >
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "34px",
              }}
            >
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
            </h1>
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
        </S.HeroBtnWrapper>
      </div>
    </S.Wrapper>
  );
}
