import Loader from "./components/organinsms/loader/laoder";
import "./index.css";
import { Suspense, lazy } from "react";
const Homepage = lazy(() => import("./pages/home/index"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Homepage />
    </Suspense>
  );
}

export default App;
