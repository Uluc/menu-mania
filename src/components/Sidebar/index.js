import React from 'react';
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle} >
             <Icon>
                  <CloseIcon/>
             </Icon>
             <SidebarMenu>
                 <SidebarLink to='/'>Link 1</SidebarLink>
                 <SidebarLink to='/'>Link 1</SidebarLink>
                 <SidebarLink to='/'>Link 1</SidebarLink> 
             </SidebarMenu>
             <SideBtnWrap>
                 <SidebarRoute to = '/'>Order Now</SidebarRoute>
             </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
