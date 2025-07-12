import Joi from "joi";
import type { RegisterFormData, FormField } from "../types";
import Form from "./Form";

export default function RegisterForm() {
  const registerSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    passwordConfirm: Joi.string(),
  });

  const formFields: FormField[] = [{}];

  return (
    <div>
      <Form />
    </div>
  );
}
