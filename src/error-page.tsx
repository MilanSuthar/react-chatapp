import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const dataerr: any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{dataerr.statusText || dataerr.message}</i>
      </p>
    </div>
  );
}