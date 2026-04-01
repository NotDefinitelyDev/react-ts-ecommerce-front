import { Link } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  let errMsg: string;
  let errCode: number;
  if (isRouteErrorResponse(error)) {
    errMsg = error.statusText;
    errCode = error.status;
  } else {
    errMsg = "Page not found";
    errCode = 404;
  }
  return (
    <div>
      <h1>{errCode}</h1>
      <h2>{errMsg}</h2>
      <Link to="/" replace={true}>
        Back to safety zone
      </Link>
    </div>
  );
};

export default Error;
