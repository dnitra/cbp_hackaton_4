
import './App.scss';
import {ContextsProvider} from './contexts/ContextsProvider';


import Auth from "./components/Auth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from './pages/Home';
import Header from './components/Header';



function App() {

  return (
     <ContextsProvider>
    <>
    <Auth />
     
    
      <Header />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Auth />} />
      </Routes>
      
      
      </>
     </ContextsProvider>
  );
}

export default App;
