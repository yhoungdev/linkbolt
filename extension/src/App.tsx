import { Suspense, lazy } from "react";
import "./styles/main.scss";
import Loader from "./popup/components/molecules/loader";
import { GetUserLinks } from "./request/get_user_links";

function App() {
  GetUserLinks();
  const Home = lazy(() => import("./popup/page/home"));

  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
