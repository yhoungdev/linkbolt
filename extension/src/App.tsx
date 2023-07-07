import { Suspense, lazy } from "react";
import Home from "./popup/page/home";
import { Router } from "react-chrome-extension-router";
import "./styles/main.scss";
import IndexPage from "./popup/page";
function App() {
  // return <Home />;
  return (
    <Suspense fallback={"loading "}>
      <Home />
    </Suspense>
  );
}

export default App;
