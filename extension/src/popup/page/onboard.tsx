import GoogleButton from "react-google-button";
import ContainerLayout from "../../layout/containerLayout";
import { goTo } from "react-chrome-extension-router";
import IndexPage from ".";

const Onboard = () => {
  const url = "http://localhost:3000/api/auth/google";

  const openNewTab = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    chrome.windows.create({
      url: url,
      width: 400,
    });
  };

  return (
    <ContainerLayout>
      <div className="my-7">
        <h3 className="text-2xl font-bold text-center ">Welcome 👋</h3>
        <p className="px-5 my-[1.5em] text-center">
          Connect with your Google account to move forward.
        </p>

        <center>
          <GoogleButton onClick={() => goTo(IndexPage)} />
        </center>
      </div>
    </ContainerLayout>
  );
};

export default Onboard;
