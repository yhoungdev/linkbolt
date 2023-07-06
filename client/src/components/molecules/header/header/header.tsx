import ContainerLayout from "../../../../layouts/containerLayout";
import Button from "../../../atoms/button/defaultButton";
import DefaultLogo from "../../../atoms/logo/defaultLogo";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <ContainerLayout>
      <div className="flex items-center justify-between py-[2em] lg:px-[4em]">
        <div>
          <DefaultLogo />
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/yhoungdev/linkbolt">
            <BsGithub size={"1.5em"} cursor={"pointer"} />
          </a>

          <div className="hidden">
            <Button>Install Extension</Button>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Header;
