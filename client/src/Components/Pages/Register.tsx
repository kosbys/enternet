import { Link } from "react-router";
import Button from "../Button";
import Input from "../Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validatePassword } from "../../helpers/helpers";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

// ADD AXIOS
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<RegisterForm> = () => {};

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
              label="שם משתמש"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 255,
              })}
            />
            <Input
              type="email"
              placeholder="ben@adam.com"
              label="אימייל"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              })}
            />
            <Input
              type="password"
              label="סיסמה"
              placeholder="סיסמה"
              {...register("password", {
                required: true,
                validate: validatePassword,
              })}
            />
            <Input
              type="password"
              label="אימות סיסמה"
              placeholder="סיסמה"
              {...register("passwordConfirm", {
                required: true,
                validate: validatePassword,
              })}
            />
            <Button disabled={!isValid} text="הרשמ\י" />
          </form>

          {errors.root && (
            <div className="error">
              <p>{errors.root.message}</p>
            </div>
          )}
          <div className="flex items-center justify-center pt-2 gap-1">
            <p>יש לך חשבון?</p>
            <Link
              className="link text-blue-500 hover:text-blue-700"
              to={"/auth/login"}
            >
              התחברות
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
