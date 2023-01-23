import React, {useState} from 'react';

const Hamburger = () => {
    const [ham,setHam]=useState(false);

    const hamburger=(e)=>{
        e.preventDefault();
        setHam(!ham);
    }
    return (
        <div>
            <div className="absolute top-5 w-full flex items-center justify-between px-10">
                <a href="" >
                    <img src="images/logo.svg" alt=""/>
                </a>

                <div className="md:hidden inline">
                    <a href="" onClick={hamburger}>
                        <img src="images/icon-hamburger.svg" alt=""/>
                    </a>
                </div>
                <ul
                    className="md:flex hidden gap-14 items-center font-semibold font-bar bg-white md:bg-transparent md:border-none">
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer md:p-0 p-5">About</li>
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer md:p-0 p-5">Services</li>
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer md:p-0 p-5">Projects</li>
                    <li className="text-xl select-none cursor-pointer p-5">
                        <a href=""
                           className="text-gray-900 hover:text-white bg-amber-50 border-2 duration-500 border-white hover:bg-transparent px-3 py-2 rounded-full">Contacts</a>
                    </li>
                </ul>

                {ham &&(

                    <ul
                    className="font-semibold rounded rounded-4 md:hidden font-bar absolute top-16 left-4 text-center w-11/12 z-10 bg-white md:bg-transparent md:border-none take">
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer hover:bg-red-400 m-2 md:p-0 p-5">About</li>
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer hover:bg-red-400 m-2 md:p-0 p-5">Services</li>
                    <li className="text-xl md:text-white text-gray-500 select-none cursor-pointer hover:bg-red-400 m-2 md:p-0 p-5">Projects</li>
                    <li className="text-xl select-none cursor-pointer p-5 hover:bg-red-400 m-2">
                        <a href=""
                           className="md:text-gray-900 text-white bg-orange-400 md:bg-amber-50 px-3 py-2 rounded-full">Contacts</a>
                    </li>
                </ul>
                    )}
            </div>
        </div>
    );
};

export default Hamburger;