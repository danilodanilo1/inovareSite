import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Xuxu = styled.div`
  color: ${({ active }) => (active ? "red" : "black")};
`;
export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    background: transparent;
    transition: 0.8s all ease;
  }
  .logoImg {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 45px;
    }
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  height: 119px;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const FloatWhats = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 10%;
  right: 20%;
  z-index: 999;
  @media screen and (max-width: 768px) {
    right: 10%;
  }
`;
export const Linkao = styled.a`
  width: 65px;
  height: 65px;
  bottom: 40px;
  right: 40px;
  background-color: #34af23;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animationWhats 300ms ease infinite alternate;

  @keyframes animationWhats {
    0% {
      transform: scale(1)
    }
    100% {
      transform: scale(1.1)
    }
  }

  i {
    margin-top: 16px;
  }

  /* for mobile */
  @media screen and (max-width: 767px) {
    .whatsapp-icon {
      margin-top: 10px;
    }

    .whatsapp_float {
      width: 40px;
      height: 40px;
      bottom: 20px;
      right: 10px;
      font-size: 22px;
    }
  }
`;
export const LogoImg = styled.img`
  width: 65px;
  height: 60px;
  background-color: #d4aa00ff;
  border-radius: 50%;
  padding-left: 2px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 45px;
  }
`;
export const NavBarLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    opacity: 0.5;
  }
`;

export const NavMenuMobile = styled.div``;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #d4aa00ff;
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    margin-right: 7%;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  color: ${({cor})=> cor ? cor : "#000"};
`;

export const NavLinks = styled(LinkS)`
  color: ${({cor})=> cor ? cor : "#000"};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: bold;
  height: 100%;
  cursor: pointer;
  font-family: "Encode Sans Expanded", sans-serif;

  &.active {
    border-bottom: 3px solid #d4aa00ff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: #d4aa00ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  animation: animation 300ms linear infinite alternate;
  @keyframes animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.02);
    }
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;
