import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

const MainProvider = ({children}) => {
  return (
    <Router>{children}</Router>
  )
}

export default MainProvider