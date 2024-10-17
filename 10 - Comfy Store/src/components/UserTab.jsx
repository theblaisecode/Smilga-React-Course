import { Link } from "react-router-dom";

function UserTab() {
  return (
    <div className="bg-neutral py-2 px-4 text-neutral-content">
      <div className="mx-auto w-11/12 lg:w-7/12">
        <div className="userTab flex justify-center gap-5 text-sm md:justify-end">
          <Link to="login">Sign in / Guest</Link>
          <Link to="register"> Create Account</Link>
        </div>
      </div>
    </div>
  );
}
export default UserTab;
