import Button from "./Button";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" action="">
        <input
          type="text"
          className="w-full"
          placeholder="שם משתמש או אימייל"
        />
        <input type="password" className="w-full" placeholder="סיסמה" />
        <Button text="התחבר/י" />
      </form>
    </div>
  );
}
