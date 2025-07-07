import { Link } from "react-router";
import Button from "../Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { confirmPasswordsMatch, validatePassword } from "../../helpers/helpers";
import type { RegisterForm } from "../../types";

export default function Register() {
  const {
    register,
    getValues,
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
            <div>
              <label htmlFor="name">שם</label>
              <input
                className="w-full p-1 rounded-xl outline-gray-300 outline-1"
                type="text"
                placeholder="בן אדם"
                {...register("name", {
                  required: "שם חסר",
                  maxLength: 255,
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="name">אימייל</label>
              <input
                className="w-full p-1 rounded-xl outline-gray-300 outline-1"
                type="email"
                placeholder="בן אדם"
                {...register("email", {
                  required: "אימייל חסר",
                  maxLength: 255,
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
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
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">אימות סיסמה</label>
              <input
                className="w-full p-1 rounded-xl outline-gray-300 outline-1"
                type="password"
                placeholder="סיסמה"
                {...register("passwordConfirm", {
                  required: "סיסמה חסרה",
                  validate: confirmPasswordsMatch(getValues),
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <Button disabled={!isValid} text="הרשמ\י" />
          </form>

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
