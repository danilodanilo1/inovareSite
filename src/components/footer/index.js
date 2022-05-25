import React from "react";
import {
  A,
  FooterContainer,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  Assignature,
} from "./footerElements";
import lin from "../images/img/in.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <A href="https://linkedin.com/in/danilonas" target="_blank">
          <Image src={lin} alt="linkedin" loading="lazy" />
        </A>
        <Assignature>
          All Rigths Reserved Nascoliver® (Danilo Nascimento)
        </Assignature>
      </FooterWrap>
    </FooterContainer>
  );
}
