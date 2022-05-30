import React from "react";
import {
  A,
  FooterContainer,
  FooterWrap,
  Assignature,
  Contato,
} from "./footerElements";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <Contato>
          <p>Contato: (11) 9 5268-8682</p>
          <p>Endereço: Rua Domingos vieira n.50</p>
          <p>Aceitamos todos os cartões de débito, crédito e pix.</p>
        </Contato>
        <A href="https://linkedin.com/in/danilonas" target="_blank">
          <Assignature>
            All Rigths Reserved Nascoliver® (Danilo Nascimento)
          </Assignature>
        </A>
      </FooterWrap>
    </FooterContainer>
  );
}
