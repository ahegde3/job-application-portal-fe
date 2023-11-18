import Logo from "./component/Logo";
import "./App.css";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Opening from "./screen/Opening";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./screen/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/opening" element={<Opening />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
