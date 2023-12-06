import Logo from "./component/Logo";
import "./App.css";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Opening from "./screen/Opening";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./screen/Registration";
import UpdateProfile from "./screen/UpdateProfile";
import ReviewAppliedJobs from "./screen/ReviewAppliedJobs";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/opening" element={<Opening />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/reviewAppliedJobs" element={<ReviewAppliedJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
