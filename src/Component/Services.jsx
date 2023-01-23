import React from 'react';

const Services = () => {
    return (
        <div>
        <div className="md:grid grid-flow-row">

            <div className="flex justify-center items-center col-span-3 h-36">
            <h1 className="font-fra text-2xl text-gray-300 font-semibold">CLIENT TESTIMONIALS</h1>

            </div>
            <div className=" py-4 px-10 text-center">
                    <img src="images/image-emily.jpg" alt="" className="rounded-full mx-auto w-24"/>
                <div className="mt-10">
                    <p className="text-lg text-gray-500 font-bar font-bold mb-8">
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <h1 className="text-2xl text-black font-semibold font-fra pt-7">Emily R.</h1>
                    <p className="font-bar font-bold text-gray-500 mb-8">Marketing Director</p>
                </div>
                
            </div>
            <div className=" py-4 px-10 text-center">
                <img src="images/image-thomas.jpg" alt="" className="rounded-full mx-auto w-24"/>
                <div className="mt-10">
                    <p className="text-lg text-gray-500 font-bar font-bold mb-8">
                        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                    </p>
                    <h1 className="text-2xl text-black font-semibold font-fra pt-7">Thomas S.</h1>
                    <p className="font-bar font-bold text-gray-500 mb-8">Chief Operating Officer</p>
                </div>

            </div>
            <div className=" py-4 px-10 text-center">
                <img src="images/image-jennie.jpg" alt="" className="rounded-full mx-auto w-24"/>
                <div className="mt-10">
                    <p className="text-lg text-gray-500 font-bar font-bold mb-8">
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <h1 className="text-2xl text-black font-semibold font-fra pt-7">Jennie F.</h1>
                    <p className="font-bar font-bold text-gray-500 mb-8">Business Owner</p>
                </div>

            </div>
            <div className="grid grid-flow-col col-span-3">
            <div className="bg-gray-100">
                <img src="images/desktop/image-gallery-milkbottles.jpg" alt=""/>
            </div>
            <div className="bg-blue-600">
                <img src="images/desktop/image-gallery-orange.jpg" alt=""/>
            </div>
            <div className="bg-orange-400">
                <img src="images/desktop/image-gallery-cone.jpg" alt=""/>
            </div>
            <div className="bg-pink-900">
                <img src="images/desktop/image-gallery-sugarcubes.jpg" alt="" className=""/>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Services;