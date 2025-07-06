import type { ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (nameOrEmail: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
};

export type { User, AuthContextType };
