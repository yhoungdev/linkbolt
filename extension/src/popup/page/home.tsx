import ContainerLayout from "../../layout/containerLayout";
import Button from "../components/atoms/button";
import Logo from "../components/atoms/logo";
import { Link } from "react-chrome-extension-router";
import Onboard from "./onboard";
import IndexPage from ".";
const Home = () => {
  return (
    <ContainerLayout>
      <div className="my-3">
        <div className="flex justify-cente r">
          <Logo />
        </div>
        <div className="my-8">
          <h3 className="font-bold text-2xl text-center  ">
            Seamless Link Sharing
            <span className="_mixed_text"> Connecting Devices.</span>
          </h3>
        </div>

        <Link component={IndexPage}>
          <Button>Continue</Button>
        </Link>
      </div>
    </ContainerLayout>
  );
};
export default Home;
