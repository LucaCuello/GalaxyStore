import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { Hero } from "./views/Hero";
import { Products } from "./views/Products";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <div className="px-3 max-w-[1024px] w-full">
            <Routes>
              <Route path="/home" element={<Hero />} />
              <Route path="/products" element={<Products />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
