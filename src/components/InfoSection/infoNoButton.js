import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HeroBtnWrapper } from "../HeroSection/heroElements";
import arrowDown from "../images/arrowUp.svg";
import arrowBlack from "../images/arrowUp.svg";
import { Parallax } from "react-scroll-parallax";

import {
  Heading,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  InfoContainer,
  ImgWrap,
} from "./infoElements";
import Image from "next/image";

export default function InfoSection({
  id,
  lightBg,
  lightText,
  topLine,
  headline,
  description,
  imgStart,
  alt,
  darkText,
  imagem,
  nextPage,
}) {
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
  }, []);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Parallax
              translateX={[-40, 40]}
              disabled={tamanhoTela <= 768 ? true : false}
            >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <HeroBtnWrapper>
                  <Link
                    to={nextPage}
                    href="/nextpage"
                    smooth={true}
                    offset={tamanhoTela <= 768 ? 0 : -70}
                    duration={700}
                    spy={true}
                    exact="true"
                  >
                    <Image
                      className="arrow"
                      primary={"true"}
                      width={30}
                      height={30}
                      loading="lazy"
                      src={lightBg ? arrowBlack : arrowDown}
                      alt="scroll-down"
                    />
                  </Link>
                </HeroBtnWrapper>
              </TextWrapper>
            </Parallax>
            <Parallax
              translateX={[40, -40]}
              disabled={tamanhoTela <= 768 ? true : false}
            >
              <ImgWrap>
                <Image
                  width={tamanhoTela >= 768 ? 500 : 300}
                  height={tamanhoTela >= 768 ? 500 : 200}
                  src={imagem}
                  loading="lazy"
                  alt={alt}
                />
              </ImgWrap>
            </Parallax>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
