import "./App.scss";
import { ContextsProvider } from "./contexts/ContextsProvider";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  const YOUR_AFFILD = "data4youcbp202106";
  return (
    <ContextsProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </>
    </ContextsProvider>
  );
}

export default App;
