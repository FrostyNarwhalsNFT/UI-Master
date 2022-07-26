
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);
  useEffect(() => {
    
    return () => {
      
    }
  }, [darkThemeEnabled])
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;