// CREATE CONTEXT
import { createContext, useContext, useState, type ReactNode } from "react";
import axios from "axios";
import type { AuthContextType, User } from "../../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
}
