import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  /* padding: 0 10%; */
  box-sizing: border-box;
`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0.0.0.2) 0%, transparent 100%);
    z-index: 2;
  }
  .arrow {
    transform: rotate(180deg);
    width: 20px;
    cursor: pointer;
  }
  .arrowBlack {
    transform: rotate(180deg);
    width: 20px;
    cursor: pointer;
  }
`;

export const HeroBg = styled.div`
  /* position: absolute; */
  /* top: 0;
  right: 0;
  bottom: o;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; */
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
  opacity: 0.6;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100%;
  position: absolute;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  @media screen and (max-width: 768px) {
    top: 200px;
  }
  .HeroImage {
    @media screen and (max-width: 768px) {
      width: 160px;
    }
  }
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const Arrow = styled.img`
  transform: rotate(180deg);
  width: 20px;
  cursor: pointer;
`;
export const ArrowBlack = styled.img`
  transform: rotate(180deg);
  width: 20px;
  cursor: pointer;
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* top:40px; */
  position: relative;
  @keyframes animate{
    0%{
      top:40px
    }
    100%{top:60px}
  }
  animation: animate 1s linear infinite alternate;
  .arrowBlack {
    transform: rotate(180deg);
    width: 20px;
    cursor: pointer;
  }
  .arrow {
    transform: rotate(180deg);
    width: 20px;
    cursor: pointer;
  }
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const HeroSpan = styled.span`
  font-weight: bold;
  color: #d4aa00ff;
`;
export const HeroImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 160px;
  }
`;
export const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  width: 100%;

  @media screen and (max-width: 768px) {
    top: 200px;
  }
`;
