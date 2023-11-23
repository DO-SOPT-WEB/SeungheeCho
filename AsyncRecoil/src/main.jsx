import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import Loading from "./Loading.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
