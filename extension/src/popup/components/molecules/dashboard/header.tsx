import Index from "../../../page";
import Logo from "../../atoms/logo";
import { Link } from "react-chrome-extension-router";
const DashboardHeader = () => {
  return (
    <div className="flex items-center  justify-between">
      <Link component={Index}>
        <Logo />
      </Link>

      <div className="bg-secondary h-[50px] w-[50px] rounded-full "></div>
    </div>
  );
};
export default DashboardHeader;
