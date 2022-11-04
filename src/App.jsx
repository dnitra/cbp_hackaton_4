
import './App.scss';
import {ContextsProvider} from './contexts/ContextsProvider';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';



function App() {

  return (
     <ContextsProvider>
    <>
      <Header />
       <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
      </>
     </ContextsProvider>
  );
}

export default App;
