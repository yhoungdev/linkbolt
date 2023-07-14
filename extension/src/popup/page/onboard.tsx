// import useSWR from "swr";
// import ContainerLayout from "../../layout/containerLayout";
// import { FcGoogle } from "react-icons/fc";
// import { fetcher } from "../../utils/fetcher";
// import axios from "axios";

// const Onboard = () => {
//   const url = "http://localhost:3000/api/auth/google";

//   const signIn = async () => {
//     try {
//       const getData = await axios.get(url);
//       const response = getData;
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <ContainerLayout>
//       <div className="my-7">
//         <h3 className="text-2xl font-bold text-center ">Welcome 👋</h3>
//         <p className=" px-5 my-[1.5em] text-center">
//           Connect with your Google account to move forward.
//         </p>

//         <button
//           onClick={signIn}
//           className="flex gap-[1em] justify-between px-3 py-3 mx-auto my-2 bg-white border items-between w-100 border-1-white"
//         >
//           <FcGoogle size={"1.5em"} />
//           <h3 className="text-black ">Sign in with Google</h3>
//         </button>
//       </div>
//     </ContainerLayout>
//   );
// };
// export default Onboard;
import React from "react";
import ContainerLayout from "../../layout/containerLayout";
import { FcGoogle } from "react-icons/fc";

const Onboard = () => {
  const url = "http://localhost:3000/api/auth/google";

  const openNewTab = () => {
    const newTab = window.open(url, "_blank");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    newTab.focus();
  };

  return (
    <ContainerLayout>
      <div className="my-7">
        <h3 className="text-2xl font-bold text-center ">Welcome 👋</h3>
        <p className="px-5 my-[1.5em] text-center">
          Connect with your Google account to move forward.
        </p>

        <button
          onClick={openNewTab}
          className="flex gap-[1em] justify-between px-3 py-3 mx-auto my-2 bg-white border items-between w-100 border-1-white"
        >
          <FcGoogle size={"1.5em"} />
          <h3 className="text-black">Sign in with Google</h3>
        </button>
      </div>
    </ContainerLayout>
  );
};

export default Onboard;
