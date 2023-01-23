import React, {useState} from 'react';
import Hamburger from "./hamburger.jsx";

const Home = () => {

    return (
        <div>
            <>
                    <img className="bg-cover bg-center h-screen w-full" src="images/desktop/image-header.jpg" alt=""/>
                <header className="select-none">
                    <Hamburger/>
                    <div className="absolute md:top-32 top-44 w-full text-center">
                        <h1 className="md:text-6xl text-4xl px-5 font-black block text-amber-50 font-fra">WE ARE CREATIVES</h1>
                    </div>
                    <div className="absolute md:top-64 top-72 animate-bounce block w-full">
                        <img src="images/icon-arrow-down.svg" alt="" className="w-12 mx-auto"/>
                    </div>

                </header>
            </>
        </div>
    );
};

export default Home;