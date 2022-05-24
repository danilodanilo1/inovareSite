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
  console.log(tamanhoTela);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavBarLogo to="/" onClick={toggleHome}>
            <Image
              className="logoImg"
              src={logo}
              width={tamanhoTela >= 768 ? 65 : 50}
              height={tamanhoTela >= 768 ? 65 : 50}
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
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp-icon"> </i>
              </Linkao>
            )}
          </>
        </NavBarContainer>
      </Nav>
    </>
  );
}
