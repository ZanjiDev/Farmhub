import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home";
import Login from "./Components/pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
