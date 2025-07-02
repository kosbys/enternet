import { Link } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { useForm, type SubmitHandler } from "react-hook-form";

type LoginForm = {
  nameOrEmail: string;
  password: string;
};

// ADD VALIDATION, ERRORS
export default function Register() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = () => {};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="שם משתמש או אימייל"
          {...register("nameOrEmail")}
        />
        <Input type="password" placeholder="סיסמה" {...register("password")} />
        <Button text="התחבר/י" />
      </form>
      <Link
        className="link underline mt-4 p-2 border rounded-lg bg-blue-500 text-white"
        to={"/auth/register"}
      >
        אין לך חשבון? הרשמ\י
      </Link>
    </div>
  );
}
