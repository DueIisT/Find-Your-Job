import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Statistics } from "./pages/Statistics/Statistics";
import { Requests } from "./pages/Requests/Requests";

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/requests" element={<Requests/>} />
      <Route path="/statistics" element={<Statistics/>} />
    </Routes>
  )
}

export default App;
