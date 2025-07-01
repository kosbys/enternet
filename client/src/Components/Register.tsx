import Button from "./Button";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" action="">
        <input type="text" className="input" placeholder="שם משתמש" />
        <input type="email" className="input" placeholder="אימייל" />
        <input type="password" className="input" placeholder="סיסמה" />
        <Button text="הירשמ/י" />
      </form>
    </div>
  );
}
