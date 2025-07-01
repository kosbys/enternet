import { Link } from "react-router";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Link className="link" to={"/auth/login"}>
          Login
        </Link>
        <Link className="link" to={"/auth/register"}>
          Register
        </Link>
      </div>
      <p>HELLO</p>
    </div>
  );
}
