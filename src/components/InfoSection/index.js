import Image from 'next/image'
import React from 'react'
import { Button } from '../../components/ButtonElement'
// import IMAGE1 from '../../images/svgsvg.svg'
// import IMAGE2 from '../../images/svg-1.svg'
import { 
    BtnWrap,
    Column1, 
    Heading, 
    InfoRow,
    InfoWrapper, 
    Subtitle, 
    TextWrapper,
    TopLine, 
    InfoContainer, 
    Column2,
    ImgWrap, 
    Img 
} from './infoElements'

export default function InfoSection ({
    id,
    lightBg,
    lightText,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    alt,
    darkText,
    imagem,
    primary,
    dark,
    dark2
}) {
    
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary === 'true' ? 1 : 0}
                                dark={dark ? 1 : 0 }
                                dar2k={dark2 ? 1 : 0 }

                            >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Image src={imagem} alt={alt} loading="lazy" />
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

