// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         // <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { Suspense, lazy } from 'react';
import './styles/main.scss';
import Loader from './popup/components/molecules/loader';
import { GetUserLinks } from './request/get_user_links';
import { useDispatch } from 'react-redux';
import { updateToken } from './redux/slice/authSlice';
import { useAuth } from './hooks/useAuth';
import { getProfile } from './request/get_profile_details';
import IndexPage from './popup/page';

function App() {
  const dispatch = useDispatch();

  const Home = lazy(() => import('./popup/page/home'));
  const Index = lazy(() => import('./popup/page'));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // chrome.storage.local.get(['auth_jwt']).then((result) => {
  //   return dispatch(updateToken(result.auth_jwt));
  // });

  const { isAuthenticated } = useAuth();

  GetUserLinks();
  getProfile();

  return (
    <Suspense fallback={<Loader />}>
      {!isAuthenticated ? <IndexPage /> : <Index />}
    </Suspense>
  );
}

export default App;
