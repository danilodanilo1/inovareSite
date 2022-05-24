import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #101522;
    font-family: 'Roboto', sans-serif;
`
export const FooterWrap = styled.div`
    padding:48px 24px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    max-width:1100px;
    margin:0 auto;
`
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;

    @media screen and ( max-width: 820px){
        padding-top: 32px;
        align-items:center;
    }
`
export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color:#fff;
    white-space:nowrap;
    align-items: center;

    @media screen and (max-width:820px){
        margin:0;
        padding:10px;
        width:100%;
        align-items:center;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size:14px;
    margin-bottom:16px;
`

export const FooterLink = styled.div`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;

    &:hover{
        color:#d4aa00ff;
        transition: 0.3s ease-in-out;
    }
`
export const A = styled.a`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;
    margin: 0 10px;
    &:hover{
        color:#d4aa00ff;
        transition: 0.3s ease-in-out;
    }
`
export const Assignature = styled.p`
    color:#fff;
    font-weight:bold;
    margin-top:20px;
    display:flex;
    align-items: center;
    text-align:center;
`