import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home.page';
import About from './page/About.page';
import NavbarComponent from './components/navbar/NavbarComponent';

const App = () => {
  return (
    <main className=" w-screen h-[500vh] bg-primary text-white font-alacrity transition-all duration-300">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App