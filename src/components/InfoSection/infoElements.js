import styled from "styled-components";

export const InfoContainer = styled.div`
  .cv {
    visibility: hidden;
  }
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;
export const InfoContainer2 = styled.div`
  .cv {
    visibility: hidden;
  }
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 930px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding:0 24px; */
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 0%;
    padding: 15px;
  }
`;

export const InfoRow2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0%;
  }
`;
export const Column1 = styled.div`
  /* margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1; */
`;

export const Column2 = styled.div`
  /* margin-bottom:15px; */
  /* padding: 0 15px; */
  /* grid-area: col2; */
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const TopLine = styled.p`
  color: #d4aa00ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 2px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 28px;
    color:#000;
  }
`;
export const Subtitle = styled.p`
  margin-top: 15px;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImgWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
  width: 100%;
`;
export const Img = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const Input = styled.input`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 30px;
  margin: 0 0 10px 0;
  padding: 0 0 0 8px;
  border-radius: 8px;
  ::placeholder {
    font-size: 14px;
  }
`;
export const TextArea = styled.textarea`
  border: 1px solid #d7d7d7;
  width: 95%;
  margin: 0 0 10px 0;
  padding: 0 0 0 8px;
  border-radius: 8px;
  height: 150px;
  ::placeholder {
    font-size: 14px;
  }
`;
