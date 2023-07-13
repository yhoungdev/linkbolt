import ContainerLayout from "../../layout/containerLayout";
import Button from "../components/atoms/button";
import Logo from "../components/atoms/logo";
import { Link } from "react-chrome-extension-router";
import Onboard from "./onboard";
import IndexPage from ".";
import HomeSwiper from "../components/organisms/home/homeSwiper";
const Home = () => {
  return (
    // <ContainerLayout>
    //   <div className="my-3">
    //     <div className="flex items-center justify-center">
    //       <Logo />
    //     </div>
    //     <div className="my-8">
    //       <HomeSwiper />
    //     </div>

    //     <Link component={IndexPage}>
    //       <Button>Continue</Button>
    //     </Link>
    //   </div>
    // </ContainerLayout>
    <IndexPage />
  );
};
export default Home;
