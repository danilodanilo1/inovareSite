import React, { useState } from "react";
import { ButtonN } from "../ButtonElement";
import { useAlert } from "react-alert";
import * as emailjs from "emailjs-com";

import {
  BtnWrap,
  Heading,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  InfoContainer,
  Input,
  TextArea,
} from "./infoElements";

export default function InfoSection({
  id,
  lightBg,
  lightText,
  imgStart,
}) {
  const alert = useAlert();

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSendMsg = (event) => {
    event.preventDefault();
    if (msg.name === "") {
      alert.error("Por favor, coloque o seu nome.");
      return;
    }
    if (msg.email === "") {
      alert.error("Por favor, coloque o seu email.");
      return;
    }
    if (msg.phone === "") {
      alert.error("Por favor, coloque o seu número de telefone.");
      return;
    }
    if (msg.message === "") {
      alert.error("Por favor, escreva uma mensagem.");
      return;
    }
    emailjs
      .sendForm(
        "service_ux27gj8",
        "template_dmcu30h",
        "form",
        "user_Wjv4zdliVTBtGoSEaabLI"
      )
      .then(() => {
        alert.success("Legal! Entraremos em contato em breve!");
      })
      .catch(() => {
        alert.error("Oops, Deu erro!");
      });

    setMsg({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <TextWrapper>
              <TopLine lightText={true}>Mande uma mensagem!</TopLine>
              <Heading lightText={true}>
                Entramos em contato com você!
              </Heading>
              <form className="formulario" onSubmit={(e) => handleSendMsg(e)}>
                <Input
                  name="name"
                  type="text"
                  value={msg.name}
                  placeholder={"Nome"}
                  onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                />
                <Input
                  name="email"
                  type="text"
                  value={msg.email}
                  placeholder={"Email"}
                  onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                />
                <Input
                  name="phone"
                  type="text"
                  value={msg.phone}
                  placeholder={"Telefone"}
                  onChange={(e) => setMsg({ ...msg, phone: e.target.value })}
                />
                <TextArea
                  style={{ padding: "10px" }}
                  name="message"
                  type="text"
                  value={msg.message}
                  placeholder={"Mensagem"}
                  onChange={(e) => setMsg({ ...msg, message: e.target.value })}
                />
                <BtnWrap>
                  <ButtonN type="submit">Enviar</ButtonN>
                </BtnWrap>
              </form>
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
