import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HeroBtnWrapper } from "../HeroSection/heroElements";
import arrowDown from "../images/arrowUp.svg";
import arrowBlack from "../images/arrowblack.svg";
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
    console.log(topLine);
  }, []);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Parallax
              translateX={[-40, 40]}
              disabled={width <= 768 ? true : false}
            >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <HeroBtnWrapper>
                  <Link
                    to={nextPage}
                    smooth={true}
                    offset={width <= 768 ? 0 : -70}
                    duration={700}
                    spy={true}
                    exact="true"
                  >
                    <Image
                      className="arrow"
                      primary={'true'}
                      width={30}
                      height={30}
                      src={lightBg ? arrowBlack : arrowDown}
                      alt="scroll-down"
                    />
                  </Link>
                </HeroBtnWrapper>
              </TextWrapper>
            </Parallax>
            <Parallax
              translateX={[40, -40]}
              disabled={width <= 768 ? true : false}
            >
              <ImgWrap>
                <Image width={600} height={500} src={imagem} alt={alt} />
              </ImgWrap>
            </Parallax>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
