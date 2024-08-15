import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/not-found.svg";
import ErrorWrapper from "./Error.js";

function Error() {
  return (
    <ErrorWrapper>
      <h3>Error</h3>
    </ErrorWrapper>
  );
}

export default Error;
