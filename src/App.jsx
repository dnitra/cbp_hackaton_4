import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {

  
  const { theme } = useTheme()
  
  const bodyColor = document.body.style
  
  useEffect(() => {
    
    theme.name === "darkTheme" ? bodyColor.backgroundColor= "black":bodyColor.backgroundColor = "white"
  },[theme])
 

 
  
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth/>} />
      </Routes>
    </>
  );
}

export default App;
