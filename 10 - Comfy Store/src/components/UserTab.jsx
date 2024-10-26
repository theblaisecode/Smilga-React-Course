import { Link } from "react-router-dom";

function UserTab() {
  return (
    <div className="bg-neutral py-3 px-4 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8">
        <div className="userTab flex justify-center gap-5 text-sm md:justify-end">
          <Link to="login" className="hover:underline">
            Sign in / Guest
          </Link>

          <Link to="register" className="hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UserTab;
