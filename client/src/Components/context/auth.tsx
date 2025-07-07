// CREATE CONTEXT
import { createContext, useContext, useState, type ReactNode } from "react";
import axios from "axios";
import type {
  AuthContextType,
  LoginForm,
  RegisterForm,
  User,
} from "../../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = (formData: RegisterForm) => {
    setLoading(true);
    setError(null);

    return api
      .post("/auth/register", formData)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        const message = err.response?.data?.message;
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (formData: LoginForm) => {
    setLoading(true);
    setError(null);

    return api
      .post("/auth/login", formData)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        const message = err.response?.data?.message;
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    return api
      .post("/auth/logout")
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.warn("Logout fail", err.message);
      });
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    handleRegister,
    handleLogin,
    handleLogout,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth error");
  }
  return context;
}
