import GoogleButton from "react-google-button";
import ContainerLayout from "../../layout/containerLayout";
import { goTo } from "react-chrome-extension-router";
import IndexPage from ".";
import { useFetch } from "../../utils/request";
import { useEffect, useState } from "react";
import axios from "axios";

const Onboard = () => {
  // const url = "https://linkbolt.up.railway.app/api/auth/google";
  const url = "https://linkbolt.onrender.com/api/auth/google";
  const [userData, setUserData] = useState(null);
  const [isError, setError] = useState();

  const openNewTab = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    chrome.tabs.create({
      url: url,
    });
  };

  return (
    <ContainerLayout>
      <div className="my-7">
        <h3 className="text-2xl font-bold text-center">Welcome 👋</h3>
        <p className="px-5 my-[1.5em] text-center">
          Connect with your Google account to move forward.
        </p>

        <center>{!isError ? <GoogleButton onClick={openNewTab} /> : ""}</center>
      </div>
    </ContainerLayout>
  );
};

export default Onboard;
