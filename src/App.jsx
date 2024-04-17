import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <main className=" w-screen h-screen bg-primary text-white font-alacrity">
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </main>
  );
}

export default App