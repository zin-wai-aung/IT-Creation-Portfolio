import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';

const App = () => {
  return (
    <main className=" w-screen h-screen bg-primary text-white font-alacrity transition-all duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App