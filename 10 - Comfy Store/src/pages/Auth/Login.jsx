import { Form, Link } from "react-router-dom";

function Login() {
  return (
    <section className="login px-4">
      <div className="mx-auto w-11/12 lg:w-7/12 flex justify-center items-center h-screen	">
        <div className="card bg-base-100 w-96 shadow-xl">
          <Form method="POST" action="login" className="card-body">
            <h4 className="text-center text-3xl font-bold mb-6">Login</h4>

            <label
              htmlFor="email"
              className="input input-bordered flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="grow"
              />
            </label>

            <label
              htmlFor="password"
              className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="grow"
              />
            </label>

            <div className="loginFormButtons flex flex-col justify-center items-center gap-3 mt-6 text-neutral ">
              <button className="btn bg-accent text-accent-content btn-block uppercase">
                Login
              </button>

              <button className="btn bg-secondary text-secondary-content btn-block uppercase">
                Guest User
              </button>
            </div>

            <p className="text-center mt-6 ">
              Not a member yet?
              <Link to="register" className="text-secondary ml-2">
                Register
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
}
export default Login;
