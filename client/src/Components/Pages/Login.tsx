import { Link } from "react-router";
import Button from "../Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validatePassword } from "../../helpers/helpers";
import type { LoginForm } from "../../types";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ mode: "onSubmit" });

  const FieldError = ({ name }: { name: keyof LoginForm }) => {};

  // USE LOGIN AUTH
  const onSubmit: SubmitHandler<LoginForm> = (formData: LoginForm) => {
    console.log(formData);
  };

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
            className="flex flex-col w-62 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="nameOrEmail">שם או אימייל</label>
              <input
                className="w-full p-1 rounded-xl outline-gray-300 outline-1"
                type="text"
                placeholder="בן אדם"
                {...register("nameOrEmail", {
                  required: "שם חסר",
                  maxLength: 255,
                })}
              />
              {errors.nameOrEmail && (
                <p className="text-red-500">{errors.nameOrEmail.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">סיסמה</label>
              <input
                className="w-full p-1 rounded-xl outline-gray-300 outline-1"
                type="password"
                placeholder="סיסמה"
                {...register("password", {
                  required: "סיסמה חסרה",
                  validate: validatePassword,
                })}
              />
            </div>
            <Button text="הרשמ\י" />
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
