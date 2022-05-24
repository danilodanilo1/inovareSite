import React from 'react'

import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarLink, SidebarMenu, 
} from './sidebarElements'

export default function Sidebar ({isOpen, toggle}) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} >
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="sobre" onClick={toggle}>Sobre nós.</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="servicos" onClick={toggle}>Serviços.</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="produtos" onClick={toggle}>Galeria.</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="cadastrar" onClick={toggle}>Orçamento Grátis.</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>   
        </>
    )
}