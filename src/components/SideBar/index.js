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
                        <SidebarLink to="sobre" onClick={toggle}>About me</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="servicos" onClick={toggle}>Skills</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="produtos" onClick={toggle}>Download Profile</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="cadastrar" onClick={toggle}>Contact me</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>   
        </>
    )
}