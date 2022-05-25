import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavBarLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImg,
  Linkao,
  NavMenuMobile,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import logo from "../images/img/triangulosemnome.svg";
import Image from "next/image";
import logoWhats from "../images/img/logowhats.svg";

export default function NavBar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const [tamanhoTela, setTamanhoTela] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    setTamanhoTela(window.screen.width);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavBarLogo to="/" href="/home" onClick={toggleHome}>
            <Image
              // className="logoImg"
              src={logo}
              loading="lazy"
              width={tamanhoTela >= 768 ? 65 : 50}
              height={tamanhoTela >= 768 ? 65 : 50}
              alt="logo inovare redes"
            />
          </NavBarLogo>
          <>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
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
                >
                  Serviços
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="produtos"
                  href="/produtos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Galeria
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavBtn>
                  <NavBtnLink
                    to="cadastrar"
                    smooth={true}
                    duration={700}
                    spy={true}
                    href="/cadasstrar"
                    exact="true"
                    offset={-80}
                  >
                    Solicite um Orçamento sem compromisso!
                  </NavBtnLink>
                </NavBtn>
              </NavItem>
            </NavMenu>
            {tamanhoTela >= 768 && (
              <Linkao
                href="https://wa.me/5511952688682"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Image
                  // className="logoImg"
                  src={logoWhats}
                  width={40}
                  loading="lazy"
                  height={40}
                  alt="logo inovare redes"
                />
              </Linkao>
            )}
          </>
        </NavBarContainer>
      </Nav>
    </>
  );
}
