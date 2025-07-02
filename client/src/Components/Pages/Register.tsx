import { Link } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { useForm, type SubmitHandler } from "react-hook-form";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

// ADD VALIDATION, ERRORS
export default function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = () => {};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="שם משתמש" {...register("name")} />
        <Input type="email" placeholder="אימייל" {...register("email")} />
        <Input type="password" placeholder="סיסמה" {...register("password")} />
        <Input
          type="password"
          placeholder="אימות סיסמה"
          {...register("passwordConfirm")}
        />
        <Button text="הירשמ/י" />
      </form>
      <Link
        className="link underline mt-4 p-2 border rounded-lg bg-blue-500 text-white"
        to={"/auth/login"}
      >
        יש לך חשבון? התחבר\י
      </Link>
    </div>
  );
}
