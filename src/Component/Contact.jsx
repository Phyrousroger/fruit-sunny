import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#458c7e] text-center py-10">
            <div className="h-24">
                <h1 className="font-bar cursor-pointer select-none text-2xl font-black text-emerald-800">sunnyside</h1>
            </div>
            <ul className="flex gap-10 items-center h-24 justify-center font-extrabold font-bar ">
                <li className="text-xl text-[#243d37] hover:text-white duration-700 select-none cursor-pointer">About</li>
                <li className="text-xl text-[#243d37] hover:text-white duration-700 select-none cursor-pointer">Services</li>
                <li className="text-xl text-[#243d37] hover:text-white duration-700 select-none cursor-pointer">Projects</li>
            </ul>
            <div className="flex justify-center gap-10">
                <img src="images/icon-facebook.svg" alt=""/>
                <img src="images/icon-instagram.svg" alt=""/>
                <img src="images/icon-twitter.svg" alt=""/>
                <img src="images/icon-pinterest.svg" alt=""/>
            </div>

        </div>
    );
};

export default Contact;