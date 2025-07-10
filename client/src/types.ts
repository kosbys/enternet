import type Joi from "joi";
import type { FieldValues } from "react-hook-form";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  required?: string;
  validation?: {
    required?: string | boolean;
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  pattern?: {};
};

export type FormProps<T extends FieldValues> = {
  fields: FormField[];
  onSubmit: (data: T) => void | Promise<void>;
  schema: Joi.Schema;
  loadingText: string;
  submitText: string;
  className?: string;
};

export type LoginFormData = {
  nameOrEmail: string;
  password: string;
};

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  handleRegister: (formData: RegisterFormData) => Promise<void>;
  handleLogin: (formData: LoginFormData) => Promise<void>;
  handleLogout: () => Promise<void>;
  loading: boolean;
  error: string | null;
};
