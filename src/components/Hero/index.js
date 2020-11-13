import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroBtn, HeroH1, HeroP, HeroItems} from './HeroElements';


const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
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
