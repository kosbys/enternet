import { BrowserRouter, Navigate, Route } from "react-router";
import "./index.css";
import { AuthProvider, useAuth } from "./Components/context/auth";
import { Routes } from "react-router";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import { type JSX } from "react";
import NotFound from "./Components/Pages/NotFound";

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" />;
};

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
