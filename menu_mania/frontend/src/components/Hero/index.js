import React, {useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroBtn, HeroH1, HeroP, HeroItems} from './HeroElements';
import Sidebar from '../Sidebar/'


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            
            <Navbar toggle = {toggle}/>
            <Sidebar isOpen = {isOpen} toggle = {toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Every Menu in One Place </HeroH1>
                    <HeroP>What are you in the mood for?</HeroP>
                    <HeroBtn>Discover New Tastes</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
