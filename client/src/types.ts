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
  register: (formData: RegisterForm) => Promise<void>;
  login: (formData: LoginForm) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
};

export type { User, RegisterForm, LoginForm, AuthContextType };
