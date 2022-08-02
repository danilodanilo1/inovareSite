import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
  font-family: "Roboto", sans-serif;
  height: 400px;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  height: 250px;
  color:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  width:100% ;
  >div{
    width: ${({tamanhoTela})=> tamanhoTela > 768 ? '30%' : '100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  >div p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #fff;
  }
  h1 {
    font-size: 12px;
  }
  span{
    width: 10px;
    height: 10px;
  }
`;
