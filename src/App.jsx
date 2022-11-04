import "./App.scss";
import { ContextsProvider } from "./contexts/ContextsProvider";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import FlightDetails from "./components/FlightDetails/FlightDetails";
import DetailedFlight from "./components/FlightCard/DetailedFlight";
// import Auth from "./components/Auth";
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
           {/* <Route path="/register" element={<Auth/>} /> */}
        </Routes>
      </>
    </ContextsProvider>
  );
}

export default App;
