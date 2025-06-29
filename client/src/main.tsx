import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="auth">
        <Route path="login" element={<Login />}/>  
        <Route path="register" element={<Register />}/>  
      </Route>

    </Routes>
  </BrowserRouter>
);
