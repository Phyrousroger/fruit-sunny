import React from 'react';

const About = () => {
    return (
        <div>
            <div className="md:grid grid-cols-2 grid-flow-row">
                <div className="flex w-full justify-center items-center">
                    <div className="md:p-20 py-12 px-8 text-center md:text-left">
                    <h1 className="text-3xl font-semibold font-fra mb-2">Transform your brand</h1>
                    <p className="font-bar font-semibold text-xl text-gray-500">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a href="" className="learn">
                        Learn More
                    </a>
                    </div>
                </div>
                <div className="">
                    <img src="images/desktop/image-transform.jpg" className="w-full" alt=""/>
                </div>
                <div className="">
                    <img src="images/desktop/image-stand-out.jpg" className="w-full" alt=""/>
                </div>
                <div className="flex w-full justify-center items-center">

                    <div className="md:p-20 py-12 px-10 text-center md:text-left">
                        <h1 className="text-3xl font-semibold font-fra mb-2">Stand out to the right audience</h1>
                        <p className="font-bar font-semibold text-xl text-gray-500">
                            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <a href="" className="learn after:bg-red-400">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img src="images/desktop/image-graphic-design.jpg" className="w-full" alt=""/>
                    <div className="absolute bottom-10 flex justify-center items-center">
                        <div className="w-2/3 text-center">
                        <h1 className="text-3xl font-black text-[#193542] font-fra mb-2">Graphic design</h1>
                        <p className="font-bar font-bold text-[#193542] text-lg text-gray-500">
                            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="images/desktop/image-photography.jpg" className="w-full" alt=""/>
                    <div className="absolute bottom-14 flex justify-center items-center">
                        <div className="w-3/6 text-center">
                            <h1 className="text-3xl font-black text-[#193542] font-fra mb-2">Photography</h1>
                            <p className="font-bar font-bold text-[#193542] text-lg text-gray-500">
                                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default About;