import type { ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type LoginForm = {
  nameOrEmail: string;
  password: string;
};

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  handleRegister: (formData: RegisterForm) => Promise<void>;
  handleLogin: (formData: LoginForm) => Promise<void>;
  handleLogout: () => Promise<void>;
  loading: boolean;
  error: string | null;
};

export type { User, RegisterForm, LoginForm, AuthContextType };
