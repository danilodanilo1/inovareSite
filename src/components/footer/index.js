import React from 'react'
import { A, FooterContainer, FooterLinksContainer, FooterWrap, FooterLinksWrapper,FooterLinkItems, Assignature  } from './footerElements'
import lin from '../images/img/in.svg'
import gram from '../images/img/gram.svg'
// import face from '../images/img/facebook.svg'
import Image from 'next/image'
export default function Footer(){
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <A href='https://linkedin.com/in/danilonas' target="_blank">
                                <Image src={lin} alt="linkedin" />
                            </A>
                            <A href='https://instagram.com/danquadrado' target="_blank">
                                <Image src={gram} alt="instagram" />
                            </A>
                            {/* <A href='https://facebook.com/debsdan' target="_blank">
                                <Image src={face} alt="instagram" />
                            </A> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Assignature>All Rigths Reserved Nascoliver® (Danilo Nascimento)</Assignature>
            </FooterWrap>
        </FooterContainer>
    )
}

