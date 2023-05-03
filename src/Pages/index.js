import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";

function Home({mode}) {
    
    return (
        <>
            <Hero />
            <Skills />
        </>
    );
}

export default Home;