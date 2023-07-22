import { Suspense, lazy } from "react";
import "./styles/main.scss";
import Loader from "./popup/components/molecules/loader";
import { GetUserLinks } from "./request/get_user_links";
import { useDispatch } from "react-redux";
import { updateToken } from "./redux/slice/authSlice";
import { useAuth } from "./hooks/useAuth";

function App() {
  const dispatch = useDispatch();
  GetUserLinks();
  const Home = lazy(() => import("./popup/page/home"));
  const Index = lazy(() => import("./popup/page"));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  chrome.storage.local.get(["auth_jwt"]).then((result) => {
    return dispatch(updateToken(result.auth_jwt));
  });

  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      {!isAuthenticated ? <Home /> : <Index />}
    </Suspense>
  );
}

export default App;
