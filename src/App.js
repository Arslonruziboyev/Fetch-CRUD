import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EpListing from "./components/EpListing";
import EpCreate from "./components/EpCreate";
import EpPost from "./components/EpPost";
import EpEdit from "./components/EpEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EpListing />}></Route>
          <Route path="components/create" element={<EpCreate />}></Route>

          <Route path="components/details/:empid" element={<EpPost />}></Route>
          <Route path="components/edit/:empid" element={<EpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
