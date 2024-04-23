import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

const MainProvider = ({ children }) => {
  return (
    <Router>
      <ThemeProvider>{children}</ThemeProvider>
    </Router>
  );
};

export default MainProvider;
