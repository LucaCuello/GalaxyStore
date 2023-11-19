import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { NavBar } from "./components/Navbar";
// TODO: Implementar fondo estrellado
// import { StarryBackground } from "./components/StarryBackground";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { AboutUs } from "./views/AboutUs";
import { Hero } from "./views/Hero";
import { Products } from "./views/Products";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
