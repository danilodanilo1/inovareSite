import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
  font-family: "Roboto", sans-serif;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #d4aa00ff;
    transition: 0.3s ease-in-out;
  }
`;
export const A = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  margin: 0 10px;
  &:hover {
    color: #d4aa00ff;
    transition: 0.3s ease-in-out;
  }
`;
export const Contato = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  p {
    margin-bottom: 5px;
  }
  p:last-child {
    margin-bottom: 20px;
  }
`;
export const Assignature = styled.p`
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  display: flex;
  font-size: 10px;
  align-items: center;
  text-align: center;
  font-family: "Roboto", "sans-serif";
`;
