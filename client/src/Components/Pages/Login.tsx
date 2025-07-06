import { Link } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { useForm, type SubmitHandler } from "react-hook-form";

type LoginForm = {
  nameOrEmail: string;
  password: string;
};

// ADD VALIDATION, ERRORS
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = () => {};

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4">
        <div className="image place-self-center">
          <img
            className="w-75 pb-5"
            src="https://allgood.org.il/wp-content/uploads/2021/06/ENTER-%D7%9C%D7%90%D7%AA%D7%A8-2-1024x900.jpg"
          ></img>
        </div>
        <div className="gap-4">
          <form
            noValidate
            className="flex flex-col w-62 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="text"
              placeholder="בן אדם"
              label="שם משתמש או אימייל"
              {...register("nameOrEmail", { required: true })}
            />
            <Input
              type="password"
              label="סיסמה"
              placeholder="סיסמה"
              {...register("password", { required: true })}
            />
            <Button text="התחבר/י" />
          </form>
          <div className="flex items-center justify-center pt-2 gap-1">
            <p>אין לך חשבון?</p>
            <Link
              className="link text-blue-500 hover:text-blue-700"
              to={"/auth/register"}
            >
              הרשמה
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
