import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="login px-4">
      <div className="mx-auto w-11/12 lg:w-7/12 flex justify-center items-center h-screen	">
        <div className="errorContent">
          <h4>There was an error</h4>
        </div>
      </div>
    </section>
  );
}
export default Error;
