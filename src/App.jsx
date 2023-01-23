import React from 'react';
import "./App.css";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Services from "./Component/Services.jsx";
import Contact from "./Component/Contact.jsx";

const App = () => {
    return (
        <div>
         <Home/>
         <About/>
            <Services/>
            <Contact/>
        </div>
    );
};

export default App;