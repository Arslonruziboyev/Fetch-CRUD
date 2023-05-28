import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EpListing from "./components/EpListing";
import EpCreate from "./components/EpCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EpListing />}></Route>
          <Route path="components/create" element={<EpCreate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
