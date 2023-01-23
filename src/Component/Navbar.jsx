import React from 'react';

const Navbar = () => {
    return (
        <>
        <header className="">
            <img className="bg-cover bg-center h-screen w-screen relative" src="images/desktop/image-header.jpg" alt=""/>

            <div className="absolute top-5 flex w-full items-center justify-around">

                <div className="w-80">
                    <a href="">
                    <img src="images/logo.svg" alt=""/>
                    </a>
                </div>
                <ul className="flex gap-14 items-center font-semibold font-bar ">
                    <li className="text-xl text-white select-none cursor-pointer">About</li>
                    <li className="text-xl text-white select-none cursor-pointer">Services</li>
                    <li className="text-xl text-white select-none cursor-pointer">Projects</li>
                    <li className="text-xl text-gray-900 bg-amber-50 px-3 py-2 rounded-full select-none cursor-pointer">Contacts</li>
                </ul>
                
            </div>
            <div className="absolute top-32 w-full text-center">
                <h1 className="md:text-6xl text-4xl font-black block text-amber-50 font-fra">WE ARE CREATIVES</h1>
            </div>
            <div className="absolute top-64 block w-full">
                <img src="images/icon-arrow-down.svg" alt="" className="w-10 mx-auto"/>
            </div>

        </header>
        </>
    );
};

export default Navbar;