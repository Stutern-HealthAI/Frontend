import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" 
    style={{display:"flex", 
      height:"100dvh", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column"
    }}>
      <h1>Oops!</h1>
      <h2>404 Error!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}