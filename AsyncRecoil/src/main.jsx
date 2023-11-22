import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading....</div>}>
        <App />
      </React.Suspense>
    </RecoilRoot>
    {/* <App /> */}
  </>
);
