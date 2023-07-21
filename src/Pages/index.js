import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

function Home({mode}) {
    
    return (
        <>
            <Hero title='About' id='About'/>
            <Skills title='Skills' id='Skills'/>
            <Projects title='Projects' id='Projects'/>
        </>
    );
}

export default Home;