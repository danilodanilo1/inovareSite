import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Center,
} from "./footerElements";
import Logo from "../images/img/logoSemNomeInovare.svg";
import Pin from "../images/img/pin.svg";
import Telefoninho from "../images/img/telefoninho.svg";
import Insta from "../images/img/insta.svg";
import Image from "next/image";
import {
  NavItem,
  NavLinks,
  NavMenu,
} from "../NavBar/NavBarElements";

export default function Footer() {
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.screen.width);
    document.documentElement.lang = "pt-BR";
  }, []);
  return (
    <FooterContainer>
      <Center tamanhoTela={tamanhoTela}>
      {tamanhoTela >= 768 && 
        <div>
          <Image
            src={Logo}
            alt="logo inovare redes"
            height={150}
            width={150}
            loading="lazy"
          />
        </div>
      }
        <div>
          <div>
            <p>
              <Image src={Pin} alt="pin" />
              <span></span>Rua Domingos vieira n.50{" "}
            </p>
            <p>
              <Image src={Telefoninho} alt="pin" />
              <span></span>(11)9 5497-1933
            </p>
            <a href={"https://www.instagram.com/inovareredesdeprotecao/"}>
              <p>
                <Image src={Insta} alt="pin" />
                <span></span>Siga-nos no Instagram
              </p>
            </a>
            <h1>Aceitamos todos os cartões de débito, crédito e pix.</h1>
          </div>
        </div>
        {tamanhoTela >= 768 && 
          <div>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="sobre"
                href="/sobre"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-80}
                cor="#fff"
              >
                Sobre Nós
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="servicos"
                smooth={true}
                href="/servicos"
                duration={700}
                spy={true}
                exact="true"
                offset={-80}
                cor="#fff"
              >
                Serviços
              </NavLinks>
            </NavItem>
            <NavItem cor="#fff">
              <NavLinks
                to="produtos"
                href="/produtos"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={-80}
                cor="#fff"
              >
                Galeria
              </NavLinks>
            </NavItem>
          </NavMenu>
        </div>
        }
      </Center>
    </FooterContainer>
  );
}
